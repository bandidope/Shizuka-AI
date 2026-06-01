import fs from 'fs';
import path from 'path';

const marriagesFile = path.resolve('tmp/marry.json');
let marriages = loadMarriages();
let proposals = {}; 
const confirmation = {};

function loadMarriages() {
    const raw = fs.existsSync(marriagesFile) ? JSON.parse(fs.readFileSync(marriagesFile, 'utf8')) : {};
    const valid = {};
    for (const user in raw) {
        const partner = raw[user];
        if (raw[partner] === user) valid[user] = partner;
    }
    return valid;
}

function saveMarriages() {
    fs.writeFileSync(marriagesFile, JSON.stringify(marriages, null, 2));
}

const userIsMarried = (user) => Object.hasOwn(marriages, user);

const handler = async (m, { conn, command }) => {
    const isPropose = /^marry$/i.test(command);
    const isDivorce = /^divorce$/i.test(command);
    const isPartner = /^partner$/i.test(command);

    try {
        const sender = m.sender;

        if (isPropose) {
            const proposee = m.quoted?.sender || m.mentionedJid?.[0];
            const proposer = sender;

            if (!proposee) {
                if (userIsMarried(proposer)) {
                    return await conn.reply(m.chat, `${xfun} Ya estás casado con *${conn.getName(marriages[proposer])}*\nUsa *#divorce* para terminar el matrimonio.`, m);
                } else {
                    throw new Error('> *Debes responder a alguien para proponer matrimonio.*');
                }
            }

            if (proposer === proposee) throw new Error('No puedes casarte contigo mismo.');
            if (userIsMarried(proposer)) throw new Error(`Ya estás casado con *${conn.getName(marriages[proposer])}*.`);
            if (userIsMarried(proposee)) throw new Error(`${conn.getName(proposee)} ya está casado con *${conn.getName(marriages[proposee])}*.`);
            if (proposals[proposer]) throw new Error('Ya hiciste una propuesta. Espera a que te respondan.');
            if (confirmation[proposee]) throw new Error(`${conn.getName(proposee)} ya tiene una propuesta pendiente.`);
            if (proposals[proposee] === proposer) throw new Error(`${conn.getName(proposee)} ya te propuso matrimonio. Responde su propuesta primero.`);

            proposals[proposer] = proposee;

            const proposerName = conn.getName(proposer);
            const proposeeName = conn.getName(proposee);
            const confirmationMessage = `💍 *Propuesta de Matrimonio*\n\n${proposerName} quiere casarse contigo, ${proposeeName}. ¿Aceptas?\n\n✐ Responde:\n> *Si* para aceptar\n> *No* para rechazar`;
            await conn.reply(m.chat, confirmationMessage, m, { mentions: [proposee, proposer] });

            confirmation[proposee] = {
                proposer,
                timeout: setTimeout(() => {
                    conn.sendMessage(m.chat, { text: '⏰ Tiempo agotado. La propuesta de matrimonio fue cancelada.' }, { quoted: m });
                    delete confirmation[proposee];
                    delete proposals[proposer];
                }, 60000)
            };

        } else if (isDivorce) {
            if (!userIsMarried(sender)) throw new Error('No estás casado con nadie.');

            const partner = marriages[sender];
            delete marriages[sender];
            delete marriages[partner];
            saveMarriages();

            await conn.reply(m.chat, `💔 ${conn.getName(sender)} y ${conn.getName(partner)} se han divorciado.`, m);

        } else if (isPartner) {
            if (!userIsMarried(sender)) throw new Error('No estás casado con nadie.');
            return await conn.reply(m.chat, `💞 Estás casado con *${conn.getName(marriages[sender])}*`, m);
        }
    } catch (error) {
        await conn.reply(m.chat, `《✧》 ${error.message}`, m);
    }
};

handler.before = async (m) => {
    if (m.isBaileys) return;
    if (!confirmation[m.sender]) return;
    if (!m.text) return;

    const { proposer, timeout } = confirmation[m.sender];

    if (/^no$/i.test(m.text)) {
        clearTimeout(timeout);
        delete confirmation[m.sender];
        delete proposals[proposer];
        return conn.sendMessage(m.chat, { text: '💔 Han rechazado tu propuesta de matrimonio.' }, { quoted: m });
    }

    if (/^si$/i.test(m.text)) {
        marriages[proposer] = m.sender;
        marriages[m.sender] = proposer;
        saveMarriages();

        clearTimeout(timeout);
        delete confirmation[m.sender];
        delete proposals[proposer];

        conn.sendMessage(m.chat, {
            text: `✩.･:｡≻───── ⋆♡⋆ ─────.•:｡✩\n💍 *¡Boda Confirmada!*\n\n🎊 ${conn.getName(proposer)} y ${conn.getName(m.sender)} ahora están felizmente casados 💞\n\n¡Felicidades a la nueva pareja!\n✩.･:｡≻───── ⋆♡⋆ ─────.•:｡✩`,
            mentions: [proposer, m.sender]
        }, { quoted: m });
    }
};

handler.tags = ['fun'];
handler.help = ['marry @usuario', 'divorce', 'partner'];
handler.command = ['marry', 'divorce', 'partner'];
handler.group = true;

export default handler;