import { execSync } from 'child_process'
let handler = async (m, { conn, text }) => {
try {  
if (global.conn.user.jid == conn.user.jid) {
let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
m.reply(`*[ 𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 ]*`)
await await conn.reply(m.chat, stdout.toString(), m)}
} catch {
var update = execSync('git remote set-url origin https://github.com/DIEGO-OFC/DORRAT-BOT-MD.git && git pull')
await m.reply(update.toString())
}}
handler.help = ['update']
handler.tags = ['owner']
handler.command = /^update|actualizar$/i
handler.rowner = true
export default handler
