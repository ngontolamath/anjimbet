let fs = require('fs')

let handler = async (m, { conn, text }) => {
let logo = fs.readFileSync(`./src/hentai.jpg`)
let caption = `Ngotak Goblok`
await conn.sendButtonImg(m.chat, logo, caption, wm, 'Owner', '.owner', m)
}
handler.command = /^hentai$/i
handler.tags =['dewasa']
handler.help = ['hentai']
module.exports = handler
