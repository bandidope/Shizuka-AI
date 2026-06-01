const handler = async (m, { conn }) => {
const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

  conn.sendMessage(m.chat, {
text: `*Holiss , Quieres Saber Los Precios? O Quieres Revender El Bot ? 🥴*

Acá Te Dejo Los Precios De McQueen Bot ⚡

> *PRECIOS GRUPO MENSUAL :*
- 🌀 Grupo X1 = 3 Soles
- 🌀 Grupo X3 = 7 Soles
- 🌀 Grupo X5 = 10 Soles

> *PRECIOS GRUPO PERMANENTE :*
- 🌀 Grupo X1 = 5 Soles
- 🌀 Grupo X3 = 10 Soles
- 🌀 Grupo X5 = 15 Soles

> *PRECIOS BOT PERSONALIZADO :*
- 🌀 Bot Personalizado ( Termux ) = 18 Soles
- 🌀 Servidor Mensual : 10 Soles
- 🌀 Archivos Premium Bot = 35 Soles
- 🌀 Bot Personalizado + Servidor = 25 Soles

*Nota :* Recuerda Al Revender Ganarás El 40% De Lo Que Vendas Ya Sea Mensual , Permanente, Menos El Producto ( Servidor ) 

https://chat.whatsapp.com/Fi6FHZ8VSGnAT7CKJkcd9r?mode=gi_t`,
mentions: [m.sender]
}, { quoted: fkontak });
};
handler.command = ['precios', 'comprar', 'adquirir'];
export default handler;