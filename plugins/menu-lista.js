
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
wm = global.wm
vs = global.vs
let { exp, limit, dorracoins, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)

const sections = [  

{

title: `⫹⫺ 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴𝙻 𝙼𝙴𝙽𝚄 ⫹⫺`,
rows: [
{title: "│🤴│𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐄 𝐌𝐈 𝐂𝐑𝐄𝐀𝐃𝐎𝐑", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚘𝚜 𝚗ú𝚖𝚎𝚛𝚘𝚜 𝚍𝚎 𝚖𝚒 𝚌𝚛𝚎𝚊𝚍𝚘𝚛", rowId: `${usedPrefix}creator`},  
{title: "│🏓│𝐈𝐍𝐅𝐎𝐁𝐎𝐓", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚒𝚗𝚏𝚘𝚋𝚘𝚝", rowId: `${usedPrefix}infobot`},
{title: "│☄️│𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎", description: "𝙼𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚖𝚎𝚗𝚞 𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘", rowId: `${usedPrefix}allmenu`},
{title: "│🤖│𝐆𝐑𝐔𝐏𝐎 𝐎𝐅𝐈𝐂𝐈𝐀𝐋 𝐃𝐄𝐋 𝐁𝐎𝐓", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚘𝚜 𝚐𝚛𝚞𝚙𝚘𝚜 𝚘𝚏𝚒𝚌𝚒𝚊𝚕𝚎𝚜 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}grupos`},
{title: "│🖥️│𝐒𝐄𝐑 𝐒𝐔𝐁-𝐁𝐎𝐓", description: "𝙹𝙰𝙳𝙸𝙱𝙾𝚃 𝙼𝚄𝙻𝚃𝙸𝙳𝙸𝚅𝙸𝙲𝙴", rowId: `${usedPrefix}jadibot`},
{title: "│🔰│𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐑-𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓", description: "INFORMACIÓN PARA INSTALAR A DORR∆T-BOT", rowId: `${usedPrefix}instalarbot`},
{title: "│🌇│𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐋𝐀 𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐀", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘", rowId: `${usedPrefix}enable welcome`},
{title: "│🌌️│𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐋𝐀 𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐀", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘", rowId: `${usedPrefix}disable welcome`},
{title: "│⛩️│𝐀𝐍𝐈𝐌𝐄𝐒", description: "𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐞 𝐚𝐧𝐢𝐦𝐞", rowId: `${usedPrefix}animemenu`},
{title: "│🎇│𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚙𝚊𝚛𝚊 𝚌𝚛𝚎𝚊 𝚜𝚝𝚒𝚌𝚔𝚎𝚛", rowId: `${usedPrefix}stickermenu`},
{title: "│👻│𝐈𝐍𝐕𝐎𝐂𝐀𝐑 𝐀𝐋 𝐆𝐑𝐔𝐏𝐎", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘", rowId: `${usedPrefix}tagall`},
{title: "│💎│𝐎𝐖𝐍𝐄𝐑 𝐁𝐎𝐓", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚚𝚞𝚎 𝚜𝚘𝚕𝚘 𝚎𝚕 𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒𝚘/𝚘𝚠𝚗𝚎𝚛 𝚙𝚞𝚎𝚍𝚎 ", rowId: `${usedPrefix}soloparaelpropietario`},
{title: "│♠️│𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐄𝐋 𝐑𝐄𝐒𝐓𝐑𝐈𝐂𝐓", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽𝙴𝚂 𝙿𝙰𝚁𝙰 𝚂𝙰𝙲𝙰𝚁 𝙶𝙴𝙽𝚃𝙴 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂", rowId: `${usedPrefix}enable restrict`},
{title: "│♣️│𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐄𝐋 𝐑𝐄𝐒𝐓𝐑𝐈𝐂𝐓", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽𝙴𝚂 𝙿𝙰𝚁𝙰 𝚂𝙰𝙲𝙰𝚁 𝙶𝙴𝙽𝚃𝙴 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂", rowId: `${usedPrefix}disable restrict`}, 
{title: "│🪀│𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐄𝐋 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙰𝙲𝚃𝙸𝚅𝙰 𝙾𝙴𝙻 𝙰𝙽𝚃𝙸 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿", rowId: `${usedPrefix}enable antilink`},
{title: "│🪀│𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐄𝐋 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿", rowId: `${usedPrefix}disable antilink`},
{title: "│💻│𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑", description: "𝙼𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊𝚛", rowId: `${usedPrefix}descargasmenu`},
{title: "│📻️│𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐋𝐎𝐒 𝐀𝐔𝐃𝐈𝐎𝐒", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾𝚂 𝚂𝙸𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾", rowId: `${usedPrefix}enable audios`},
{title: "│🎧│𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐋𝐎𝐒 𝐀𝐔𝐃𝐈𝐎𝐒", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾𝚂 𝚂𝙸𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾", rowId: `${usedPrefix}disable audios`},
{title: "│🎮│𝐆𝐀𝐌𝐄", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚓𝚞𝚎𝚐𝚘𝚜 𝚙𝚊𝚛𝚊 𝚍𝚒𝚟𝚎𝚛𝚝𝚒 𝚝𝚞 𝚐𝚛𝚞𝚙𝚘", rowId: `${usedPrefix}juegosdelgrupo`},
{title: "│🎑│𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚙𝚊𝚛𝚊 𝚌𝚛𝚎𝚊 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚒𝚍𝚘𝚛𝚎𝚜", rowId: `${usedPrefix}convertidores`},
{title: "│🏢│𝐆𝐑𝐔𝐏𝐎", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚖𝚎𝚗𝚞 𝚍𝚎 𝚐𝚛𝚞𝚙𝚘", rowId: `${usedPrefix}paraGroup`},
{title: "│📣│𝐃𝐄𝐓𝐄𝐂𝐓", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝙽𝙾𝚃𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙴 𝙽𝚄𝙴𝚅𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽 𝙴𝙽 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}enable detect`},
{title: "│📢│𝐃𝐄𝐓𝐄𝐂𝐓", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙻𝙰𝚂 𝙽𝙾𝚃𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙴 𝙽𝚄𝙴𝚅𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽 𝙴𝙽 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}disable detect`},
{title: "│🏧│𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐌𝐄𝐑 𝐀𝐋 𝐁𝐎𝐓", description: "𝚃𝚎 𝚒𝚗𝚟𝚒𝚝𝚘 𝚊 𝚛𝚎𝚐𝚒𝚜𝚝𝚛𝚊𝚛𝚝𝚎 𝚙𝚊𝚛𝚊 𝚚𝚞𝚎 𝚎𝚜𝚝é𝚜 𝚎𝚗 𝚖𝚒 𝚋𝚊𝚜𝚎 𝚍𝚎 𝚍𝚊𝚝𝚘𝚜 𝚍𝚎𝚕 𝚋𝚘𝚝 𝚛𝚎𝚐𝚒𝚜𝚝𝚎𝚛", rowId: `${usedPrefix}verificar`},
{title: "│🎴│𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐋𝐎𝐒 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝚃𝙾𝙳𝙰𝚂 𝙻𝙰𝚂 𝙸𝙼𝙰𝙶𝙴𝙽𝙴𝚂, 𝚅𝙸𝙳𝙴𝙾𝚂 𝙾 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙴𝙽𝚅𝙸𝙰𝙳𝙾𝚂 𝚂𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝙽 𝙴𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁", rowId: `${usedPrefix}enable autosticker`},
{title: "│🧧️│𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐋𝐎𝐒 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝚃𝙾𝙳𝙰𝚂 𝙻𝙰𝚂 𝙸𝙼𝙰𝙶𝙴𝙽𝙴𝚂, 𝚅𝙸𝙳𝙴𝙾𝚂 𝙾 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙴𝙽𝚅𝙸𝙰𝙳𝙾𝚂 𝚂𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝙽 𝙴𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁", rowId: `${usedPrefix}disable autosticker`},
{title: "│🕋│𝐏𝐑𝐄𝐍𝐃𝐄𝐑 𝐘 𝐀𝐏𝐀𝐆𝐀𝐑", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎𝚊𝚌𝚝𝚒𝚟𝚊𝚌𝚒ó𝚗 𝚢 𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚛", rowId: `${usedPrefix}enable`},
{title: "│🖼│𝐈𝐌𝐀𝐆𝐄", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚋𝚞𝚜𝚚𝚞𝚎𝚍𝚊 𝚍𝚎 𝚒𝚖𝚊𝚐𝚎𝚗𝚎𝚜", rowId: `${usedPrefix}buscadores`},
{title: "│🎙│𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐀𝐔𝐃𝐈𝐎𝐒", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚎𝚏𝚎𝚌𝚝𝚘𝚜", rowId: `${usedPrefix}suara`},
{title: "│📑│𝐐𝐔𝐎𝐓𝐄𝐒", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚕𝚘𝚐𝚘𝚜", rowId: `${usedPrefix}Quotes`},
{title: "│🌱│𝐑𝐏𝐆", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚎𝚡𝚙", rowId: `${usedPrefix}lb`},
{title: "│📴│𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚊𝚙𝚊𝚐𝚊𝚛 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜", rowId: `${usedPrefix}enable`},
{title: "│🏧│𝐋𝐀 𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃 𝐃𝐄𝐋 𝐁𝐎𝐓", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚟𝚎𝚕𝚘𝚌𝚒𝚍𝚊𝚍 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}ping`},
{title: "│🎧│𝐀𝐔𝐃𝐈𝐎𝐒", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚊𝚞𝚍𝚒𝚘𝚜", rowId: `${usedPrefix}audios`},
{title: "│🌎|𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐄𝐋 𝐌𝐎𝐃𝐎 𝐏𝐔𝐁𝐋𝐈𝐂𝐎", description: "𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚅𝚄𝙴𝙻𝚅𝙴 𝙳𝙴 𝚄𝚂𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾 𝚈/𝙾 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix}enable public`},
{title: "│🎑|𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐄𝐋 𝐌𝐎𝐃𝐎 𝐏𝐔𝐁𝐋𝐈𝐂𝐎", description: "𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚅𝚄𝙴𝙻𝚅𝙴 𝙳𝙴 𝚄𝚂𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾 𝚈/𝙾 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix}disable public`}, 
{title: "│🧼│𝐇𝐄𝐍𝐓𝐀𝐈", description: "𝙼𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚖𝚎𝚗𝚞 +18", rowId: `${usedPrefix}hornymenu`},
{title: "│🥵│𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐌𝐎𝐃𝐎 𝐇𝐎𝐑𝐍𝐘", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙰𝙲𝚃𝙸𝚅𝙰  𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾", rowId: `${usedPrefix}enable modohorny`},
{title: "│🥶│𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐌𝐎𝐃𝐎 𝐇𝐎𝐑𝐍𝐘", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾", rowId: `${usedPrefix}disable modohorny`},
{title: "│🛠│𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔", description: "𝙼𝚞𝚎𝚜𝚝𝚛𝚊 𝚎𝚕 𝚖𝚎𝚗𝚞 𝚑𝚎𝚛𝚛𝚊𝚖𝚒𝚎𝚗𝚝𝚊𝚜", rowId: `${usedPrefix}herramientas`},
{title: "│💬│𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐏𝐂𝐎𝐍𝐋𝐘", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix}enable gconly`},
{title: "│📔│𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐆𝐂𝐎𝐍𝐋𝐘", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}disable gconly`}, 
{title: "│🏢│𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐆𝐂𝐎𝐍𝐋𝐘", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}enable gconly`},
{title: "│🏛️│𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐆𝐂𝐎𝐍𝐋𝐘", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix}disable gconly`}, 
{title: "│📌│𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈𝐁𝐎𝐓", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚎𝚕 𝚖𝚎𝚗𝚞 𝚍𝚎 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚌𝚒ó𝚗", rowId: `${usedPrefix}infobot`},          

]}, ] 

let name = await conn.getName(m.sender)

//let name = conn.getName(m.sender)

const listMessage = {

text: `
┏─────────────────────⬣\n│${ucapan()}\n│💚•.¸💚¸.• *${name}* •.¸💚¸.•💚\n┗───────────────────── ⳹

╔═══〔 *${wm}* 〕═══⬣
║ ⏱️ ▢ *Hora*    
║ ⌚ ▢ ${time}   
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ ⚡ ▢ *Activo durante*
║ ⚡ ▢ ${uptime}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 💎 ▢ *Versión de 𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃*
║ 💎 ▢ ${vs}
║ 🔳 ▢ Library:
║ 🖥️ ▢ Baileys-MD
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 👥 ▢ *Usuario(s)*
║ 💫 ▢ ${Object.keys(global.db.data.users).length} 
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╚══════════════════⬣`, footer: `${wm}`, 
//${name} ${ucapan()}

title: null,

buttonText: "🔰 𝗦𝗘𝗟𝗘𝗖𝗖𝗜𝗢𝗡𝗘 𝗔𝗤𝗨𝗜 🔰", 

sections }

await conn.sendMessage(m.chat, listMessage)

}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')

handler.tags = ['group', 'owner']

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|menulista|\?)$/i

handler.exp = 20

handler.register = true

export default handler

function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')

}

function ucapan() {

  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto

  let res = "🌉Buenas madrugadas"

  if (time >= 4) {

    res = "🌇Buenos Días"

  }

  if (time >= 11) {

    res = "🏙️Buenas Tardes"

  }

  if (time >= 15) {

    res = "🌆Buenas tardes"

  }

  if (time >= 17) {

    res = "🌃Buenas noches"

  }

  return res

}

