let handler = async(m, { conn }) => {

let chat = global.db.data.chats[m.chat];
if (!chat.nsfw) return m.reply(hotw);

let vid = 'https://dark-core-api.vercel.app/api/random/anime-random-hot?key=dk-vip';

conn.sendMessage(m.chat, { 
        video: { url: vid }, 
        caption: '🍒 ¡Disfruta Del Video!', 
        footer: dev, 
        buttons: [
            {
                buttonId: `.vxxx2`,
                buttonText: { displayText: 'Siguiente Vídeo' }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });
}

handler.tag = ['nsfw'];
handler.help = ['videoxxx2'];
handler.command = ['videoxxx2', 'vxxx2'];

export default handler;