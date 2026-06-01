import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"

global.botNumber = ""

global.owner = [
  ["51936994155", "Whois 👑", true],
  ["51904937048", "Bot", true]
]

global.botname = '𝐒𝐭𝐨𝐫𝐦 𝐁𝐨𝐭 🇦🇱'
global.namebot = '𝐒𝐭𝐨𝐫𝐦 𝐁𝐨𝐭 🇦🇱'
global.packname = '𝐓𝐞𝐚𝐦 𝐍𝐢𝐠𝐡𝐭𝐰𝐢𝐬𝐡 🇦🇱'
global.wm = '𝐒𝐭𝐨𝐫𝐦 𝐁𝐨𝐭 🇦🇱'
global.author = '𝐖𝐡𝐨𝐢𝐬𝐬 𝐘𝐚𝐥𝐥𝐢𝐜𝐨 🇦🇱'
global.dev = '© 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐓𝐞𝐚𝐦 𝐍𝐢𝐠𝐡𝐭𝐰𝐢𝐬𝐡 🇦🇱.'

global.banner = 'https://raw.githubusercontent.com/Kone457/Nexus/refs/heads/main/Anime/99eec236ee.jpg'
global.banner2 = 'https://raw.githubusercontent.com/Kone457/Nexus/main/Datos/75fbe587ad51.jpg'
global.icon = 'https://i.postimg.cc/ZR6tbmdF/a6b0b4c96c1ecc0258de9a6678434f65.jpg'
global.currency = 'Coins'
global.sessions = 'sessions/session-bot'
global.jadi = 'sessions/session-sub'

global.api = {
  url: 'https://nexevo.boxmine.xyz',
  url2: 'https://api.vreden.my.id',
  url3: 'https://api-faa.my.id',
  url4: 'https://api.delirius.store',
  key: 'NEX-Shizuka'
}

global.my = {
  ch: '120363400241973967@newsletter',
  name: '꒰ ✨ 𝐓𝐞𝐚𝐦 𝐍𝐢𝐠𝐡𝐭𝐰𝐢𝐬𝐡  ꒱'
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright(`Update "${file}"`))
  import(`${file}?update=${Date.now()}`)
})
