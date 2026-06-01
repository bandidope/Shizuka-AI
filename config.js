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

global.banner = 'https://i.postimg.cc/Z5vS32BG/g26d-H.jpg'
global.banner2 = 'https://i.postimg.cc/Z5vS32BG/g26d-H.jpg'
global.icon = 'https://i.postimg.cc/Z5vS32BG/g26d-H.jpg'
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
  ch: '120363419947391620@newsletter',
  name: '꒰ ✨ 𝐓𝐞𝐚𝐦 𝐍𝐢𝐠𝐡𝐭𝐰𝐢𝐬𝐡  ꒱'
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright(`Update "${file}"`))
  import(`${file}?update=${Date.now()}`)
})
