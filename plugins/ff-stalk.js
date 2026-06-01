
import axios from 'axios';

let handler = async (m, { conn, text, usedPrefix, command}) => {
  if (!text) {
    throw `*⚠️ INGRESE UN ID DE JUGADOR DE FREE FIRE*\n\n*📝 Ejemplo de uso:*\n${usedPrefix + command} 92860576`;
}

  m.reply('🎮 *Buscando datos del jugador...*');

  try {
    const data = await getFreeFireData(text.trim());
    const response = formatPlayerData(data);
    m.reply(response);
} catch (e) {
    m.reply('❌ *Error:* ' + e.message);
}
};

async function getFreeFireData(playerId) {
  const url = `https://api.vreden.my.id/api/v1/stalker/freefire?id=${playerId}`;
  const { data} = await axios.get(url, { timeout: 10000});

  if (!data.status ||!data.result) {
    throw new Error('No se pudo obtener información del jugador.');
}

  return data.result;
}

function formatPlayerData(player) {
  return `🎯 *DATOS DEL JUGADOR FREE FIRE*\n` +
         `═`.repeat(30) + `\n\n` +
         `🆔 *ID:* ${player.game_id}\n` +
         `👤 *Nombre:* ${player.username}\n` +
         `🏅 *Nivel:* ${player.level || 'Desconocido'}\n` +
         `📊 *Rango:* ${player.rank || 'No disponible'}\n` +
         `🗓️ *Última actualización:* ${player.last_updated || 'No disponible'}\n\n` +
         `✅ *Consulta completada con éxito.*`;
}

handler.help = ['ffstalk <id>'];
handler.tags = ['free']
handler.command = ['ffstalk', 'freefirestalk', 'stalkff'];

export default handler;