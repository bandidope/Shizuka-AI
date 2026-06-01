let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`

let img = 'https://i.postimg.cc/Z5vS32BG/g26d-H.jpg' 
let texto = `*Holiss , Quieres Saber Los Precios? O Quieres Revender El Bot ? 🥴*\n\nAcá Te Dejo Los Precios De McQueen Bot ⚡\n\n> *PRECIOS GRUPO MENSUAL :*\n- 🌀 Grupo X1 = 3 Soles\n- 🌀 Grupo X3 = 7 Soles\n- 🌀 Grupo X5 = 10 Soles\n\n> *PRECIOS GRUPO PERMANENTE :*\n- 🌀 Grupo X1 = 5 Soles\n- 🌀 Grupo X3 = 10 Soles\n- 🌀 Grupo X5 = 15 Soles\n\n> *PRECIOS BOT PERSONALIZADO :*\n- 🌀 Bot Personalizado ( Termux ) = 18 Soles\n- 🌀 Servidor Mensual : 10 Soles\n- 🌀 Archivos Premium Bot = 35 Soles\n- 🌀 Bot Personalizado + Servidor = 25 Soles\n\n*Nota :* Recuerda Al Revender Ganarás El 40% De Lo Que Vendas Ya Sea Mensual , Permanente, Menos El Producto ( Servidor )\n\n https://chat.whatsapp.com/Fi6FHZ8VSGnAT7CKJkcd9r?mode=gi_t`

const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['comprar']
handler.tags = ['info']
handler.command = ['comprar'] 
handler.admin = false
export default handler