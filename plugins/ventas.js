const handler = async (m, { conn }) => {
const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

  conn.sendMessage(m.chat, {
text: `*Holiss , Quieres Saber Los Precios? O Quieres Revender El Bot ? 🥴*\n\nAcá Te Dejo Los Precios De McQueen Bot ⚡\n\n> *PRECIOS GRUPO MENSUAL :*\n- 🌀 Grupo X1 = 3 Soles\n- 🌀 Grupo X3 = 7 Soles\n- 🌀 Grupo X5 = 10 Soles\n\n> *PRECIOS GRUPO PERMANENTE :*\n- 🌀 Grupo X1 = 5 Soles\n- 🌀 Grupo X3 = 10 Soles\n- 🌀 Grupo X5 = 15 Soles\n\n> *PRECIOS BOT PERSONALIZADO :*\n- 🌀 Bot Personalizado ( Termux ) = 18 Soles\n- 🌀 Servidor Mensual : 10 Soles\n- 🌀 Archivos Premium Bot = 35 Soles\n- 🌀 Bot Personalizado + Servidor = 25 Soles\n\n*Nota :* Recuerda Al Revender Ganarás El 40% De Lo Que Vendas Ya Sea Mensual , Permanente, Menos El Producto ( Servidor )\n\nhttps://chat.whatsapp.com/Fi6FHZ8VSGnAT7CKJkcd9r?mode=gi_t`,
mentions: [m.sender]
}, { quoted: fkontak });
};
handler.help = ['comprar'];
handler.tags = ['main'];
handler.command = /^(comprar)$/i;
export default handler;