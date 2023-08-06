import translate from "@vitalets/google-translate-api";
import fetch from "node-fetch";
import axios from "axios";
let handler = async (m, {conn, command}) => {
  
    if (command == "consejo") {
      let res = await fetch("https://zenzapis.xyz/randomtext/motivasi?apikey=hdiiofficial");
      //let res = await fetch("https://supra-api.herokuapp.com/api/conselho?apikey=supraz")
      let json = await res.json();
      let frase = json.result.message;
      let frase1 = await translate(frase, {to: "es", autoCorrect: true});
      await m.reply(`*┏━━━━━━━━━━━━━━━━┓*\n*┠❧  ${frase1.text}*\n*┗━━━━━━━━━━━━━━━━┚*`);
    }

    if (command == "fraseromantica") {
    var fraseroman = frasesRomanticas;
      m.reply(`*╭─◆────◈⚘◈─────◆─╮*\n*❥  ${fraseroman}*\n*╰─◆────◈⚘◈─────◆─╯*`);
    }

    if (command == "historiaromantica") {
      let res = await fetch("https://api-xcoders.site/api/random/cerpen/cinta?apikey=xcoders");
      let json = await res.json();
      let {story, title, author_name} = json.result;
      let storytime = await translate(story, {to: "es", autoCorrect: true}).catch((_) => null);
      let titletime = await translate(title, {to: "es", autoCorrect: true}).catch((_) => null);
      conn.reply(
        m.chat,
        `᭥🫐᭢ Título: ${titletime.text}
᭥🍃᭢ Autor: ${author_name}
────────────────
${storytime.text}`,
        m
      );
    }
  
  
};
handler.tags = ["frases"];
handler.command = handler.help = ["consejo", "fraseromantica", "historiaromantica"];
export default handler;


const frasesRomanticas = [
  "Te amo más que las palabras pueden decir.",
  "Eres la persona más importante en mi vida.",
  "No puedo imaginar mi vida sin ti.",
  "Eres mi mejor amigo, mi amante y mi alma gemela.",
  "Me haces reír más que nadie.",
  "Me haces sentir amado y especial.",
  "Eres mi roca, mi apoyo y mi inspiración.",
  "Estoy tan agradecido de tenerte en mi vida.",
  "Te amo más que la vida misma.",
  "Eres mi todo.",
  "Eres mi luz en la oscuridad.",
  "Eres mi estrella guía.",
  "Eres mi sol.",
  "Eres mi luna.",
  "Eres mi estrella fugaz.",
  "Eres mi arcoíris.",
  "Eres mi hada madrina.",
  "Eres mi príncipe azul.",
  "Eres mi princesa.",
  "Eres mi caballero de brillante armadura.",
  "Eres mi alma gemela.",
  "Eres mi mejor amigo.",
  "Eres mi compañero de crimen.",
  "Eres mi cómplice.",
  "Eres mi confidente.",
  "Eres mi apoyo.",
  "Eres mi inspiración.",
  "Eres mi motivación.",
  "Eres mi razón de ser.",
  "Eres mi todo.",
  "Me haces sentir como si pudiera volar.",
  "Me haces sentir como si pudiera tocar las estrellas.",
  "Me haces sentir como si pudiera hacer cualquier cosa.",
  "Me haces sentir como si pudiera ser yo mismo.",
  "Me haces sentir como si pudiera ser la mejor versión de mí mismo.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar.",
  "Me haces sentir como si pudiera ser amado.",
  "Me haces sentir como si pudiera ser feliz.",
  "Me haces sentir como si pudiera amar."]

