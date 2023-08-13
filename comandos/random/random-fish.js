import fetch from "node-fetch";
import axios from "axios";
let handler = async (m, {conn}) => {
  try {
    let res = await axios.get(`https://api.sefinek.net/api/v1/animals/fish`);
    let json = await res.json();
    let img = await json.url;
    let caption = `
_©The Zirax - Bot_
`.trim();
    conn.sendFile(m.chat, img, "fish.jpg", caption, m);
  } catch (e) {
    console.log(e);
    throw "*Error!*";
  }
};
handler.help = ["fish"];
handler.tags = ["random"];
handler.command = ["fish", "pescado"];
handler.fail = null;
export default handler;
