require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const { Character } = require('mailist')
const moment = require('moment-timezone')
const usere = JSON.parse(fs.readFileSync('./lib/user.json'))
const { JSDOM } = require('jsdom')
const { createWorker } = require('tesseract.js');
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const cron = require('node-cron')
const { Primbon } = require('scrape-primbon')
const Carbon = require("unofficial-carbon-now")
const primbon = new Primbon()
const { Simp, Pokemon, Ship, IShipOptions } = require('@shineiichijo/canvas-chan')
const { smsg, formatp,  formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention,GIFBufferToVideoBuffer, getRandom } = require('./lib/myfunc')
const Levels = require('discord-xp')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
Levels.setURL("mongodb+srv://abae:das1234@cluster0.lfp5z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
console.log("Connected to the database1")
const canvacord = require('canvacord')
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://abae:das1234@cluster0.lfp5z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
}
const user = require("./models/user")
const xfar = require("xfarr-api")
const hxz = require("hxz-api")
const cheerio = require('cheerio')
const msgFilter= require('./lib/msgFilter.js')
const Welcomer = require('./lib/welcomer.js');
const { Chalk } = require("cfonts/lib/Chalk")
const { Doujin } = require("@shineiichijo/nhentai-pdf")
const { tmpdir } = require("os");
const { readFile } = require ("fs/promises")
const nHentai = require("shentai")                              
const { Database } = require('quickmongo');  
const db = new Database("mongodb+srv://abae:das1234@cluster0.lfp5z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

db.on("ready", () => {
    console.log("Connected to the database");
});  
   
module.exports = arus = async (arus, m, chatUpdate, store) => {
	await db.connect();
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        const icmd = body.startsWith(prefix)
        const isCmd = prefix.includes(body != '' && body.slice(0, 1)) && body.slice(1) != ''
        const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await arus.decodeJid(arus.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const contant = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
      
        // Group
        const isGroup=  m.chat.endsWith("@g.us");
        const groupMetadata = m.isGroup ? await arus.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
        const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
       const mentionByReply = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
        //db fetch
    const _exp = await db.get("user")
    const anti = await db.get("mod")
    const count = await db.get("group")
    const wel = await db.get("events")
	const bannded = await db.get("ban")
	const wild = await db.get("wild")
//db validation
const _anti = anti || []
const _wel = wel || []
const expa = _exp || []
const _count = count || []
const _ban = bannded || []
const _wild = wild || []

//Exp

    if (icmd) {	
    if (expa.includes(m.sender) == false) {
    	 db.push("user", m.sender)
    	}
    if (_count.includes(m.chat) == false ){
    	 db.push("group", m.chat)
    	}
	}

if (icmd) {	
  if(_ban.includes(`${m.sender}`)) return m.reply(`You are banned from using commands ❌`)
}

if (icmd) {	
			 const randomXp = Math.floor(Math.random() * 3) + 1;//Random amont of XP until the number you want + 1
    const hasLeveledUp = await Levels.appendXp(m.sender, "bot", randomXp); 
    if (hasLeveledUp) {
        const user = await Levels.fetch(m.sender, "bot");
        // ROLE (Change to what you want, or add) and you can change the role sort based on XP.
        const levelRole = user.level
        var role = 'Warrior'
        if (levelRole <= 2) {
            var role = 'Elite III'
        } else if (levelRole <= 4) {
            var role = 'Elite II'
        } else if (levelRole <= 6) {
            var role = 'Elite I'
        } else if (levelRole <= 8) {
            var role = 'Master IV'
        } else if (levelRole <= 10) {
            var role = 'Master III'
        } else if (levelRole <= 12) {
            var role = 'Master II'
        } else if (levelRole <= 14) {
            var role = 'Master I'
        } else if (levelRole <= 16) {
            var role = 'Grandmaster V'
        } else if (levelRole <= 18) {
            var role = 'Grandmaster IV'
        } else if (levelRole <= 20) {
            var role = 'Grandmaster III'
        } else if (levelRole <= 22) {
            var role = 'Grandmaster II'
        } else if (levelRole <= 24) {
            var role = 'Grandmaster I'
        } else if (levelRole <= 26) {
            var role = 'Epic V'
        } else if (levelRole <= 28) {
            var role = 'Epic IV'
        } else if (levelRole <= 30) {
            var role = 'Epic III'
        } else if (levelRole <= 32) {
            var role = 'Epic II'
        } else if (levelRole <= 34) {
            var role = 'Epic I'
        } else if (levelRole <= 36) {
            var role = 'Legend V'
        } else if (levelRole <= 38) {
            var role = 'Legend IV'
        } else if (levelRole <= 40) {
            var role = 'Legend III'
        } else if (levelRole <= 42) {
            var role = 'Legend II'
        } else if (levelRole <= 44) {
            var role = 'Legend I'
        } else if (levelRole <= 46) {
            var role = 'Mythic'
        } else if (levelRole <= 50) {
            var role = 'Mythic Glory'
        }
        await arus.sendMessage(m.chat, { image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5kFSuoFniw90CNXW8z1FkDma4WF6fJyL3Q&usqp=CAU" }, caption: `* LEVEL UP! *\n\n*📃️Name*: ${pushname}\n*🎯️XP*: ${user.xp} / ${Levels.xpFor(user.level + 1)}\n*❤️Level*: ${user.level} 🆙 \n*🔮️Role*: *${role}*\n\nCongrats!! 🎉🎉`}, { quoted: m });
    }
		}
		
    if (isGroup && _anti.includes(`${m.chat}`)) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isAdmins) return 
        m.reply("*Group Link Detected!!!*");
        await arus.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
    }
     ///////////////pokemon-game////////////

	 /////////////////////////////////////
   

        // Push Message To Console && Auto Read
        if (m.message) {
            arus.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ ICHIKA ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> FROM'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> MSG'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
    

        switch(command) {
case '':
    if(icmd){


    const dbut = [
{buttonId: '=help', buttonText: {displayText: 'Commands'}, type: 1},
{buttonId: '=info', buttonText: {displayText: 'Bot status'}, type: 1}
]
let buttonMessaged = {
        image: {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sy106U9USACTqd_KFLtoxM-feLDzVphILQ&usqp=CAU"},
        caption: `Hey *${pushname}* it's Mizuhara. Do you mean: !help`,
        footer: '©MIZUHARA~ARUS',
        buttons: dbut,
        headerType: 4
    }

 await arus.sendMessage(m.chat,buttonMessaged,{quoted:m})
}
 break
 case 'ssh':
 case 'stickersearch':{
	 if (!q) return m.reply("❌ No query provided!")
		 try {
		 let ss = await xfar.StickerSearch(q)
		 console.log(ss)
	 let ui = ss.sticker_url
	 if(!ui) return m.reply("❌No sticker found")
	 let rs = ui[Math.floor(Math.random() * ui.length)]
 let sticker = new Sticker(rs, {
    pack: "Anime Sticker", // The pack name
    author: "Mizuhara", // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['🤩', '🎉'], // The sticker category
    id: '12345', // The sticker id
    quality: 75, // The quality of the output file
    background: 'transparent' // The sticker background color (only for full stickers)
})

const buffer = await sticker.toBuffer()
arus.sendMessage(m.chat, {sticker: buffer}, {quoted: m})	 
		} catch (err) {
m.reply("An Error Occurred")   
console.log(err)
}
 }
 break
 
 
 case 'info':{
	     const formater = (seconds) => {
        const pad = (s) => {
            return (s < 10 ? '0' : '') + s
        }
        const hrs = Math.floor(seconds / (60 * 60))
        const mins = Math.floor(seconds % (60 * 60) / 60)
        const secs = Math.floor(seconds % 60)
        return ' ' + pad(hrs) + ':' + pad(mins) + ':' + pad(secs)
    }
	    const dbut = [
{buttonId: '=support', buttonText: {displayText: 'Support'}, type: 1},
{buttonId: '=help', buttonText: {displayText: 'Commands'}, type: 1}
]
    const uptime = process.uptime()
	let tr = expa.length
	let ur = _count.length
	let b = _ban.length
let ter = `*──🔰 _MIZUHARA_ 🔰──*

⌛️ *Uptime*: ${formater(uptime)}
📚 *Commands*: 60
👥 *Users*: ${tr}
📭 *Groups*: ${ur}
🚫 *Ban_Users*: ${b}`
   let buttonMessaged = {
	           image: {url:"https://fashionsista.co/wallpaper/wallpaper/20210401/download-cute-white-shirt-anime-girl-original-wallpaper-preview.webp"},
        caption: ter,
        footer: '©MIZUHARA~ARUS',
        buttons: dbut,
        headerType: 4
    }
 await arus.sendMessage(m.chat,buttonMessaged,{quoted:m})
}
 break
case 'help':
case 'cmd':
case 'menu':
case 'commands':{
	let menu = `*Hello ${pushname} I am Mizuhara*
(❤w❤)
*I am a bot created using*
*node.js programming language*📚

This bot is made by _*Arus*_
and the script is private.

• 🗜*Prefix* : =

• 💡*Name* : Mizuhara

*Please join the
support group =support*

🔰 _*COMMANDS*_ 🔰

*CMD:* =profile
*Description*: Displays the information of the user

*CMD:* =rank
*Discription*: Displays the rank card of the user

*CMD:* =info
*Description*: Displays the information about the bot 🌐️

*CMD:* =sticker
*Description*: Turns images into stickers 🔖️
*Usage*: =sticker as caption of picture / =sticker Arus|Mizuhara

*CMD:* =stickersearch <keyword>
*Description*:  Search sticker from internet 👽
*Usage*: =ssh anime

*CMD:* =leaderboard
*Discription*: Get the the exp leaderboard (First 10 players will be shown)

*CMD:* =carbon <text>
*Discription*: Create and share beautiful images of your source code.
*Usage*: =carbon if ( 1> 0 ) {
                                 console.log("Hello world")
                                 };

*CMD:* =getgif <key words>
*Discription*: Get gif regarding to your key words
*Usage*: =getgif mizuhara

*CMD:* =sauce
*Description*: Give's the title of the picture specified ❤️
*Usage:* =sauce as the caption or reply of any picture

*CMD:* =pokemon <Pokemon name>
*Discription:* Returns picture of a random Pokemon 😺️
*Usage:* =pokemon eevee

*CMD:* =waifu
*Discription:* Returns picture of a random waifu 💌️

*CMD:* =anime <anime name>
*Discription:* Returns the information of the given anime* 📺️
*Usage:* =anime sakura trick

*CMD:* =charecter
*Discription:* Returns the information of the given anime charecter* 🇯🇵
*Usage:* =chara tomioka

*CMD:* =manga
*Discription:* Returns the information of the given anime charecter* 📒
*Usage:* =manga naruto

*CMD:* =guesspoke
*Discription:* It will start a game of guessing the pokemon 🕹️

*CMD:* =guess <pokemon name>
*Discription:* Through this command you can answer the guessing game
*Usage:* =guess eevee

*CMD:* =end
*Discription:* It will end the guessing game ♦️

*CMD:* =img/gif
*Discription:* It will convert the tagged sticker in to image/gif
*Usage:* =img/gif tag the sticker

*CMD:* =pinterest <key words>
*Discription:* Get the image from pinterest
*Usage:* =pinterest tomioka

*CMD:* =tourl
*Discription:* converts the image/video to url
*Usage:* =tourl tag the image/video


*CMD:* =lyrics <song name>
*Discription:* Displays the lyricsof the given song 🎶️
*Usage:* =lyrics Shinzou wo sasageyo        

*CMD:* =neko/kemonomimi/fox_girl/holo
*Discription:* Displays picture of neko/kemonomimi/fox_girl/holo ;)💚️

*CMD:* =wallpaper <keyword>
*Discription:* Returns a random anime wallpaper based on the keyword📱️
*Usage:* =wallpaper Black Butler

*CMD:* =meme
*Discription:* Returns a random meme 🎷️ 

*CMD:* =sr <subreddit_title>
*Discription:* Displays a post from the given subreddit💻️
*Usage:* =sr Emilia

*CMD:* =ocr
*Discription:* Get the text from the image
*Usage:* =ocr as caption of picture

*CMD:* =ship [tag/quote user]
*Discription:* Ship people with you or someone
*Usage:* =ship @user

*CMD:* =play
*Discription:* play a song with just search term!🎵 
*Usage:* =play memories

*CMD:* =ytv [URL]
*Discription:* Downloads given YT Video and sends it as video
*Usage:* =ytv www.youtube.com

*CMD:* =yta [URL]
*Discription:* Downloads given YT Video and sends it as audio
*Usage:* =yta www.youtube.com

*CMD:* =yts [term]
*Discription:* Searches YT
*Usage:* =yts your name 

*CMD:* =ban [@tag]
*Discription:* Bans the tagged users globally
*Usage:* =ban @user

*CMD:* =unban [@tag]
*Discription:* Unban the tagged users globally
*Usage:* =unban @user

*CMD:* =invite
*Discription:* Get the invite link og the group

*CMD:* =gimage [term]
*Discription:* Get image from google
*Usage:* =gimage anime

*CMD:* =google [term]
*Discription:* Get google search results
*Usage:* =google anime

*CMD:* =pat/hug/kiss/slap/cuddle/kick
*Discription:* Let's React
*Usage:* =pat @user

Admin Commands 📙️
Only group admins can execute this command

*CMD:* =act/disact <option>
*Discription:* enable welcome and antilink in the group
*Usage:* =act/disact events
                 =act/disact mod

*CMD:* =tagall <text>
*Discription:* Tags all members in the group 🔊️
*Usage:* =ping Well, in that case

*CMD:* =delete
*Discription:* Deletes the Bot's message 💔️
*Usage:* Send =delete as reply to the bot's message
To execute the following commands the bot and the author needs to be admin

*CMD:* =seticon
*Discription:* Sets the quoted image as the group icon🎆️

*CMD:* =setdesc <text>
*Discription:* Sets the description of a group
*Usage:* =setdesc hello world

*CMD:* =group open/close
*Discription:* Open the group and close the group
*Usage:* =group open
      =group close

*CMD:* =kick @user
*Discription:* Kicks the mentioned person from the group🏌️

*CMD:* =promote @user
*Discription:* Makes the metioned user admin 👑️

*CMD:* =demote @user
*Discription:* Demotes the mentioned user from adminship 💔️

There are many hidden and fun keywords ;)
Hope you have a great day!`
m.reply(menu)
}
break
      
case 'pokemon': {
	
		try {
		let { data: res } = await axios.get(`https://some-random-api.ml/pokedex?pokemon=${q}`)
	 if (res.error) return m.reply(`❌ No such pokemon`)
	 let yu = ""
	 yu +=`📚*Name*: ${res.name}
🔰*Id*: ${res.id}
💫*Type*: ${res.type}
☀️*Species*: ${res.species}
❄️*Abilites*: ${res.abilities}
⛓*Base experience*: ${res.base_experience}
🧩*Gender*: ${res.gender}
_*STATS*_
❤️*Hp*: ${res.stats.hp}
🔮*Attack*: ${res.stats.attack}
🧬*Defense*: ${res.stats.defense}
⚔️*Sp atk*: ${res.stats.sp_atk}
🛡*Sp def*: ${res.stats.sp_def}
🕣*Speed*: ${res.stats.speed}
📗*Total*: ${res.stats.total}\n
_*FAMILY*_
📌*Evolution Stag*: ${res.family.evolutionStage}
📍*Evolution Line*: ${res.family.evolutionLine}\n
_*DESCRIPTION*_
${res.description}
📰*Generation*: ${res.generation}\n\n`
const response = await axios.get(res.sprites.animated,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var sgif = await GIFBufferToVideoBuffer(buffer)
		arus.sendMessage(m.chat,{video: sgif, gifPlayback:true,caption:yu},{quoted:m})
//arus.sendMessage(m.chat, { image: { url: res.sprites.normal }, caption: yu }, { quoted: m })
		} catch (err) {
m.reply("An Error Occurred")   
console.log(err)
}
}
break
         case'lead':
    case'leaderboard':
  const mems_id = new Array()
      const lb = await Levels.fetchLeaderboard("bot", 10);
					 let lbtext = "*── 「 LEADERBOARDS 」 ──*\n\n"
	  for (let i = 0; i < lb.length; i++) {
		          const levelRole = lb[i].level
        var role = 'Warrior'
        if (levelRole <= 2) {
            var role = 'Elite III'
        } else if (levelRole <= 4) {
            var role = 'Elite II'
        } else if (levelRole <= 6) {
            var role = 'Elite I'
        } else if (levelRole <= 8) {
            var role = 'Master IV'
        } else if (levelRole <= 10) {
            var role = 'Master III'
        } else if (levelRole <= 12) {
            var role = 'Master II'
        } else if (levelRole <= 14) {
            var role = 'Master I'
        } else if (levelRole <= 16) {
            var role = 'Grandmaster V'
        } else if (levelRole <= 18) {
            var role = 'Grandmaster IV'
        } else if (levelRole <= 20) {
            var role = 'Grandmaster III'
        } else if (levelRole <= 22) {
            var role = 'Grandmaster II'
        } else if (levelRole <= 24) {
            var role = 'Grandmaster I'
        } else if (levelRole <= 26) {
            var role = 'Epic V'
        } else if (levelRole <= 28) {
            var role = 'Epic IV'
        } else if (levelRole <= 30) {
            var role = 'Epic III'
        } else if (levelRole <= 32) {
            var role = 'Epic II'
        } else if (levelRole <= 34) {
            var role = 'Epic I'
        } else if (levelRole <= 36) {
            var role = 'Legend V'
        } else if (levelRole <= 38) {
            var role = 'Legend IV'
        } else if (levelRole <= 40) {
            var role = 'Legend III'
        } else if (levelRole <= 42) {
            var role = 'Legend II'
        } else if (levelRole <= 44) {
            var role = 'Legend I'
        } else if (levelRole <= 46) {
            var role = 'Mythic'
        } else if (levelRole <= 50) {
            var role = 'Mythic Glory'
        }
		let name = await user.findOne({ id: lb[i].userID })
		console.log(name)
    lbtext += `${i + 1}# ${name.name}\n*LEVEL* : ${lb[i].level}\n*XP* : ${lb[i].xp}\n*ROLR* : ${role}\n\n`;
	mems_id.push(lb[i].userID)
}
    m.reply(lbtext)

break
case 'support':{
	m.reply("The group link has been sent to you personal inbox")
	arus.sendMessage(m.sender,{text:'https://chat.whatsapp.com/BncdJRVCfOAK1WSfe5DLNJ'},{quoted:m})
	
}
break
case "carbon":
case "code":
if (!q) return m.reply("❌ No query provided!")
try {



        const carbon = new Carbon.createCarbon()
           .setCode(q).setBackgroundColor('#1b3648')
       
     const bufferr =  await Carbon.generateCarbon(carbon) 
       arus.sendMessage(m.chat, {image: bufferr}, {quoted: m})
     

} catch (err) {
m.reply("An Error Occurred")   
console.log(err)
 
    
}
break
case 'getgif': 
	if (!q) return m.reply("❌ No query provided!")
		try {
		               let { data: gi } = await axios.get(`https://g.tenor.com/v1/search?q=${q}&key=LIVDSRZULELA&limit=8`)
				  
 arus.sendMessage(m.chat, { video: { url: gi.results?.[Math.floor(Math.random() * gi.results.length)]?.media[0]?.mp4?.url }, caption: "Here you go",gifPlayback: true }, { quoted: m })
		} catch (err) {
			m.reply("No gif found")
		}
break

case 'rank':
          
const userq = await Levels.fetch(m.sender, "bot");
				        const levelRoleq = userq.level
        var role = 'Warrior'
        if (levelRoleq <= 2) {
            var role = 'Elite III'
        } else if (levelRoleq <= 4) {
            var role = 'Elite II'
        } else if (levelRoleq <= 6) {
            var role = 'Elite I'
        } else if (levelRoleq <= 8) {
            var role = 'Master IV'
        } else if (levelRoleq <= 10) {
            var role = 'Master III'
        } else if (levelRoleq <= 12) {
            var role = 'Master II'
        } else if (levelRoleq <= 14) {
            var role = 'Master I'
        } else if (levelRoleq <= 16) {
            var role = 'Grandmaster V'
        } else if (levelRoleq <= 18) {
            var role = 'Grandmaster IV'
        } else if (levelRoleq <= 20) {
            var role = 'Grandmaster III'
        } else if (levelRoleq <= 22) {
            var role = 'Grandmaster II'
        } else if (levelRoleq <= 24) {
            var role = 'Grandmaster I'
        } else if (levelRoleq <= 26) {
            var role = 'Epic V'
        } else if (levelRoleq <= 28) {
            var role = 'Epic IV'
        } else if (levelRoleq <= 30) {
            var role = 'Epic III'
        } else if (levelRoleq <= 32) {
            var role = 'Epic II'
        } else if (levelRoleq <= 34) {
            var role = 'Epic I'
        } else if (levelRoleq <= 36) {
            var role = 'Legend V'
        } else if (levelRoleq <= 38) {
            var role = 'Legend IV'
        } else if (levelRoleq <= 40) {
            var role = 'Legend III'
        } else if (levelRoleq <= 42) {
            var role = 'Legend II'
        } else if (levelRoleq <= 44) {
            var role = 'Legend I'
        } else if (levelRoleq <= 46) {
            var role = 'Mythic'
        } else if (levelRoleq <= 50) {
            var role = 'Mythic Glory'
        }
		let disc = m.sender.substring(3, 7)
			let textr = "";
            if (pushname) {
             textr += `*${pushname}#${disc}'s* Exp\n\n`
			} else {
				textr += `*${m.sender}#${disc}'s* Exp\n\n`
			}
			textr += `*🎯️XP*: ${userq.xp} / ${Levels.xpFor(userq.level + 1)}\n*❤️Level*: ${userq.level}\n*🔮️Role*: ${role}`
			
			try {
                    ppuser = await arus.profilePictureUrl(m.sender, 'image')
                } catch {
                    ppuser = 'https://www.linkpicture.com/q/IMG-20220118-WA0387.png'
                }
				

			                const rank = new canvacord.Rank()
                    .setAvatar(ppuser)
                    .setLevel(userq.level)
                    .setLevelColor('#ffa200', '#ffa200')
                    .setCurrentXP(userq.xp)
                    .setOverlay('#000000', 100, false)
                    .setRequiredXP(Levels.xpFor(userq.level + 1))
                    .setProgressBar('#ffa200', 'COLOR')
				    .setRank(0, role, false)
                    .setBackground('COLOR', '#000000')
                    .setUsername(pushname)
                    .setDiscriminator(disc)
                rank.build().then(async(data)=>{
					arus.sendMessage(m.chat,{image:data,caption:textr},{quoted:m})
  })

break


//////////////////////////UTILS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

case 'guesspoke':{
	let pok = ["bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","squirtle","wartortle","blastoise","caterpie","metapod","butterfree","weedle","kakuna","beedrill","pidgey","pidgeotto","pidgeot","rattata","raticate","spearow","fearow","ekans","arbok","pikachu","raichu","sandshrew","sandslash","nidoran-f","nidorina","nidoqueen","nidoran-m","nidorino","nidoking","clefairy","clefable","vulpix","ninetales","jigglypuff","wigglytuff","zubat","golbat","oddish","gloom","vileplume","paras","parasect","venonat","venomoth","diglett","dugtrio","meowth","persian","psyduck","golduck","mankey","primeape","growlithe","arcanine","poliwag","poliwhirl","poliwrath","abra","kadabra","alakazam","machop","machoke","machamp","bellsprout","weepinbell","victreebel","tentacool","tentacruel","geodude","graveler","golem","ponyta","rapidash","slowpoke","slowbro","magnemite","magneton","farfetchd","doduo","dodrio","seel","dewgong","grimer","muk","shellder","cloyster","gastly","haunter","gengar","onix","drowzee","hypno","krabby","kingler","voltorb","electrode","exeggcute","exeggutor","cubone","marowak","hitmonlee","hitmonchan","lickitung","koffing","weezing","rhyhorn","rhydon","chansey","tangela","kangaskhan","horsea","seadra","goldeen","seaking","staryu","starmie","mr-mime","scyther","jynx","electabuzz","magmar","pinsir","tauros","magikarp","gyarados","lapras","ditto","eevee","vaporeon","jolteon","flareon","porygon","omanyte","omastar","kabuto","kabutops","aerodactyl","snorlax","articuno","zapdos","moltres","dratini","dragonair","dragonite","mewtwo","mew","chikorita","bayleef","meganium","cyndaquil","quilava","typhlosion","totodile","croconaw","feraligatr","sentret","furret","hoothoot","noctowl","ledyba","ledian","spinarak","ariados","crobat","chinchou","lanturn","pichu","cleffa","igglybuff","togepi","togetic","natu","xatu","mareep","flaaffy","ampharos","bellossom","marill","azumarill","sudowoodo","politoed","hoppip","skiploom","jumpluff","aipom","sunkern","sunflora","yanma","wooper","quagsire","espeon","umbreon","murkrow","slowking","misdreavus","unown","wobbuffet","girafarig","pineco","forretress","dunsparce","gligar","steelix","snubbull","granbull","qwilfish","scizor","shuckle","heracross","sneasel","teddiursa","ursaring","slugma","magcargo","swinub","piloswine","corsola","remoraid","octillery","delibird","mantine","skarmory","houndour","houndoom","kingdra","phanpy","donphan","porygon2","stantler","smeargle","tyrogue","hitmontop","smoochum","elekid","magby","miltank","blissey","raikou","entei","suicune","larvitar","pupitar","tyranitar","lugia","ho-oh","celebi","treecko","grovyle","sceptile","torchic","combusken","blaziken","mudkip","marshtomp","swampert","poochyena","mightyena","zigzagoon","linoone","wurmple","silcoon","beautifly","cascoon","dustox","lotad","lombre","ludicolo","seedot","nuzleaf","shiftry","taillow","swellow","wingull","pelipper","ralts","kirlia","gardevoir","surskit","masquerain","shroomish","breloom","slakoth","vigoroth","slaking","nincada","ninjask","shedinja","whismur","loudred","exploud","makuhita","hariyama","azurill","nosepass","skitty","delcatty","sableye","mawile","aron","lairon","aggron","meditite","medicham","electrike","manectric","plusle","minun","volbeat","illumise","roselia","gulpin","swalot","carvanha","sharpedo","wailmer","wailord","numel","camerupt","torkoal","spoink","grumpig","spinda","trapinch","vibrava","flygon","cacnea","cacturne","swablu","altaria","zangoose","seviper","lunatone","solrock","barboach","whiscash","corphish","crawdaunt","baltoy","claydol","lileep","cradily","anorith","armaldo","feebas","milotic","castform","kecleon","shuppet","banette","duskull","dusclops","tropius","chimecho","absol","wynaut","snorunt","glalie","spheal","sealeo","walrein","clamperl","huntail","gorebyss","relicanth","luvdisc","bagon","shelgon","salamence","beldum","metang","metagross","regirock","regice","registeel","latias","latios","kyogre","groudon","rayquaza","jirachi","deoxys","turtwig","grotle","torterra","chimchar","monferno","infernape","piplup","prinplup","empoleon","starly","staravia","staraptor","bidoof","bibarel","kricketot","kricketune","shinx","luxio","luxray","budew","roserade","cranidos","rampardos","shieldon","bastiodon","burmy","wormadam","mothim","combee","vespiquen","pachirisu","buizel","floatzel","cherubi","cherrim","shellos","gastrodon","ambipom","drifloon","drifblim","buneary","lopunny","mismagius","honchkrow","glameow","purugly","chingling","stunky","skuntank","bronzor","bronzong","bonsly","mime-jr","happiny","chatot","spiritomb","gible","gabite","garchomp","munchlax","riolu","lucario","hippopotas","hippowdon","skorupi","drapion","croagunk","toxicroak","carnivine","finneon","lumineon","mantyke","snover","abomasnow","weavile","magnezone","lickilicky","rhyperior","tangrowth","electivire","magmortar","togekiss","yanmega","leafeon","glaceon","gliscor","mamoswine","porygon-z","gallade","probopass","dusknoir","froslass","rotom","uxie","mesprit","azelf","dialga","palkia","heatran","regigigas","giratina","cresselia","phione","manaphy","darkrai","shaymin","arceus","victini","snivy","servine","serperior","tepig","pignite","emboar","oshawott","dewott","samurott","patrat","watchog","lillipup","herdier","stoutland","purrloin","liepard","pansage","simisage","pansear","simisear","panpour","simipour","munna","musharna","pidove","tranquill","unfezant","blitzle","zebstrika","roggenrola","boldore","gigalith","woobat","swoobat","drilbur","excadrill","audino","timburr","gurdurr","conkeldurr","tympole","palpitoad","seismitoad","throh","sawk","sewaddle","swadloon","leavanny","venipede","whirlipede","scolipede","cottonee","whimsicott","petilil","lilligant","basculin","sandile","krokorok","krookodile","darumaka","darmanitan","maractus","dwebble","crustle","scraggy","scrafty","sigilyph","yamask","cofagrigus","tirtouga","carracosta","archen","archeops","trubbish","garbodor","zorua","zoroark","minccino","cinccino","gothita","gothorita","gothitelle","solosis","duosion","reuniclus","ducklett","swanna","vanillite","vanillish","vanilluxe","deerling","sawsbuck","emolga","karrablast","escavalier","foongus","amoonguss","frillish","jellicent","alomomola","joltik","galvantula","ferroseed","ferrothorn","klink","klang","klinklang","tynamo","eelektrik","eelektross","elgyem","beheeyem","litwick","lampent","chandelure","axew","fraxure","haxorus","cubchoo","beartic","cryogonal","shelmet","accelgor","stunfisk","mienfoo","mienshao","druddigon","golett","golurk","pawniard","bisharp","bouffalant","rufflet","braviary","vullaby","mandibuzz","heatmor","durant","deino","zweilous","hydreigon","larvesta","volcarona","cobalion","terrakion","virizion","tornadus","thundurus","reshiram","zekrom","landorus","kyurem","keldeo","meloetta","genesect","chespin","quilladin","chesnaught","fennekin","braixen","delphox","froakie","frogadier","greninja","bunnelby","diggersby","fletchling","fletchinder","talonflame","scatterbug","spewpa","vivillon","litleo","pyroar","flabebe","floette","florges","skiddo","gogoat","pancham","pangoro","furfrou","espurr","meowstic","honedge","doublade","aegislash","spritzee","aromatisse","swirlix","slurpuff","inkay","malamar","binacle","barbaracle","skrelp","dragalge","clauncher","clawitzer","helioptile","heliolisk","tyrunt","tyrantrum","amaura","aurorus","sylveon","hawlucha","dedenne","carbink","goomy","sliggoo","goodra","klefki","phantump","trevenant","pumpkaboo","gourgeist","bergmite","avalugg","noibat","noivern","xerneas","yveltal","zygarde","diancie","hoopa","volcanion","rowlet","dartrix","decidueye","litten","torracat","incineroar","popplio","brionne","primarina","pikipek","trumbeak","toucannon","yungoos","gumshoos","grubbin","charjabug","vikavolt","crabrawler","crabominable","oricorio","cutiefly","ribombee","rockruff","lycanroc","wishiwashi","mareanie","toxapex","mudbray","mudsdale","dewpider","araquanid","fomantis","lurantis","morelull","shiinotic","salandit","salazzle","stufful","bewear","bounsweet","steenee","tsareena","comfey","oranguru","passimian","wimpod","golisopod","sandygast","palossand","pyukumuku","type-null","silvally","minior","komala","turtonator","togedemaru","mimikyu","bruxish","drampa","dhelmise","jangmo-o","hakamo-o","kommo-o","tapu-koko","tapu-lele","tapu-bulu","tapu-fini","cosmog","cosmoem","solgaleo","lunala","nihilego","buzzwole","pheromosa","xurkitree","celesteela","kartana","guzzlord","necrozma","magearna","marshadow","poipole","naganadel","stakataka","blacephalon","zeraora","meltan","melmetal","grookey","thwackey","rillaboom","scorbunny","raboot","cinderace","sobble","drizzile","inteleon","skwovet","greedent","rookidee","corvisquire","corviknight","blipbug","dottler","orbeetle","nickit","thievul","gossifleur","eldegoss","wooloo","dubwool","chewtle","drednaw","yamper","boltund","rolycoly","carkol","coalossal","applin","flapple","appletun","silicobra","sandaconda","cramorant","arrokuda","barraskewda","toxel","toxtricity","sizzlipede","centiskorch","clobbopus","grapploct","sinistea","polteageist","hatenna","hattrem","hatterene","impidimp","morgrem","grimmsnarl","obstagoon","perrserker","cursola","sirfetch","mr","runerigus","milcery","alcremie","falinks","pincurchin","snom","frosmoth","stonjourner","eiscue","indeedee","morpeko","cufant","copperajah","dracozolt","arctozolt","dracovish","arctovish","duraludon","dreepy","drakloak","dragapult","zacian","zamazenta","eternatus","kubfu","urshifu","zarude"]
	
	let randompoke = pok[Math.floor(Math.random() * pok.length)]
	let gg = await db.get(`${m.chat}-game`)
if(gg) return m.reply(`A gussing game is already going on. Use *=end* to forfeit this game.`)

	await db.set(`${m.chat}-game`, randompoke)
	const image = await new Pokemon(randompoke,  true).build()
	arus.sendMessage(m.chat, { image: image, caption: `Guess the pokemon *Ex*: =guess <name>` }, { quoted: m })
	setTimeout(async () => {
//do something
let ggt = await db.get(`${m.chat}-game`)
const imt = await new Pokemon(ggt,  false).build()
	arus.sendMessage(m.chat, { image: imt, caption: `Time Out!!The correct answe is ${ggt}` })
	await db.delete(`${m.chat}-game`)
}, 30 * 1000)
}
break
case 'forfeit':
case 'ff':
case 'end': {
	let gge = await db.get(`${m.chat}-game`)
	if(!gge) return m.reply("Sorry no gussing game is going on")
		await m.reply(`The game has ended. The answer was  *${gge}*`)
	await db.delete(`${m.chat}-game`)
//m.reply(`The game has ended. The answer was  *${gg}*`)
}
break
case 'answer':
case 'guess': {
	let ggt = await db.get(`${m.chat}-game`)
	if(!ggt) return m.reply("Sorry no gussing game is going on")
	//if(ggt == "none") return m.reply("Sorry no gussing game is going on")
		if (!contant) return m.reply(`❌ No answer provided!`)
			let trx = ""
			if (ggt == contant.toLowerCase()) {
				trx = `You have guessed the correct pokemon *${contant}*`
			} else {
				trx = `You have guessed the incorrect pokemon ~${contant}~ the correct answe is ${ggt}`			
			}
			const imt = await new Pokemon(ggt,  false).build()
	arus.sendMessage(m.chat, { image: imt, caption: trx }, { quoted: m })
	await db.delete(`${m.chat}-game`)
}
break
 
    
case  'sticker': case 's': case 'stickergif': case 'sgif':
   {
	 if (!quoted) return m.reply(`❌ Could not find any Image/Video in context`)
		 if (q) {
	anu = args.join(' ').split('|')
    pack = anu[0] !== '' ? anu[0] : global.packname
    author = anu[1] !== '' ? anu[1] : global.author
    } else {
    	pack = global.packname
        author = global.author
        }
    if (/image/.test(mime)) {

		let media = await quoted.download()
    m.reply("wait your request is under process")
let sticker = new Sticker(media, {
    pack: pack, // The pack name
    author: author, // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['🤩', '🎉'], // The sticker category
    id: '12345', // The sticker id
    quality: 75, // The quality of the output file
    background: 'transparent' // The sticker background color (only for full stickers)
})

const buffer = await sticker.toBuffer()
arus.sendMessage(m.chat, {sticker: buffer}, {quoted: m})
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 20) return m.reply('🕐 Cannot fetch videos longer than *11 Seconds*')
        let media = await quoted.download()
    let sticker = new Sticker(media, {
        pack: pack, // The pack name
        author: author, // The author name
        type: StickerTypes.FULL, // The sticker type
        categories: ['🤩', '🎉'], // The sticker category
        id: '12345', // The sticker id
        quality: 75, // The quality of the output file
        background: 'transparent' // The sticker background color (only for full stickers)
    })
   
    const stikk = await sticker.toBuffer() 
   
    
    arus.sendMessage(m.chat, {sticker: stikk}, {quoted: m})
    } else {
        m.reply("❌ Could not find any Image/Video in context")
        }

 }
 break
    case 'profile':
const userw = await Levels.fetch(m.sender, "bot");
				        const levelRole = userw.level
        var role = 'Warrior'
        if (levelRole <= 2) {
            var role = 'Elite III'
        } else if (levelRole <= 4) {
            var role = 'Elite II'
        } else if (levelRole <= 6) {
            var role = 'Elite I'
        } else if (levelRole <= 8) {
            var role = 'Master IV'
        } else if (levelRole <= 10) {
            var role = 'Master III'
        } else if (levelRole <= 12) {
            var role = 'Master II'
        } else if (levelRole <= 14) {
            var role = 'Master I'
        } else if (levelRole <= 16) {
            var role = 'Grandmaster V'
        } else if (levelRole <= 18) {
            var role = 'Grandmaster IV'
        } else if (levelRole <= 20) {
            var role = 'Grandmaster III'
        } else if (levelRole <= 22) {
            var role = 'Grandmaster II'
        } else if (levelRole <= 24) {
            var role = 'Grandmaster I'
        } else if (levelRole <= 26) {
            var role = 'Epic V'
        } else if (levelRole <= 28) {
            var role = 'Epic IV'
        } else if (levelRole <= 30) {
            var role = 'Epic III'
        } else if (levelRole <= 32) {
            var role = 'Epic II'
        } else if (levelRole <= 34) {
            var role = 'Epic I'
        } else if (levelRole <= 36) {
            var role = 'Legend V'
        } else if (levelRole <= 38) {
            var role = 'Legend IV'
        } else if (levelRole <= 40) {
            var role = 'Legend III'
        } else if (levelRole <= 42) {
            var role = 'Legend II'
        } else if (levelRole <= 44) {
            var role = 'Legend I'
        } else if (levelRole <= 46) {
            var role = 'Mythic'
        } else if (levelRole <= 50) {
            var role = 'Mythic Glory'
        }
		const bio = await arus.fetchStatus(m.sender)
console.log(bio)
let disec = m.sender.substring(3, 7)
			let tex = "";
            if (pushname) {
             tex += `*🍃 Name*: ${pushname}#${disec}\n\n`
			 tex += `*🔰 Number*: ${m.sender}\n\n`
			}
			if (bio.status) {
				tex += `*🏳 Bio*: ${bio.status}\n\n`
			}
			
			tex += `*🕹 XP*: ${userw.xp} / ${Levels.xpFor(userw.level + 1)}\n\n*❤Level*: ${userw.level}\n\n*🏮 Role*: ${role}\n`
			
			try {
                    ppuser = await arus.profilePictureUrl(m.sender, 'image')
                } catch {
                    ppuser = 'https://www.linkpicture.com/q/IMG-20220118-WA0387.png'
                }
				if (isCreator){
					tex += `\n*🔱 Owner*: True\n\n`
				}
				if (groupName) {
					tex += `\n*🚥 Group*: ${groupName}\n\n`
				}
				if (isAdmins) {
					tex += `*♨️ Admim*: true\n`
				}
				arus.sendMessage(m.chat, { image: { url: ppuser }, caption: tex }, { quoted: m })
break

  case 'img': case 'togif': case 'toimg': case 'gif': {
	  if(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
		                  if (!quoted) return m.reply(`❌ Could not find any sticker in context`)
                if (!/webp/.test(mime)) return m.reply(`❌ Couldn't find any sticker in context`)
                m.reply("wait your request is under process")
                let media = await arus.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) m.reply(err)
                    let buffer = fs.readFileSync(ran)
                    arus.sendMessage(m.chat, { image: buffer,caption:'©MIZUHARA-2022' }, { quoted: m })
                    fs.unlinkSync(ran)
                })
	  } else if (m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true){
		            if (!quoted) return m.reply(`❌ Could not find any sticker in context`)
                if (!/webp/.test(mime)) return m.reply(`❌ Couldn't find any sticker in context`)
                m.reply("wait your request is under process")
        let { webp2mp4File } = require('./lib/uploader')
                let media = await arus.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await arus.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '©MIZUHARA-2022' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
	  }

            }    
break
case 'pin':
case 'pinterest':{
	if (!q) m.reply(`❌ No query provided!`)
	try {
		let result = await hxz.pinterest(q)
				let rando =  result[Math.floor(Math.random() * result.length)]			
    arus.sendMessage(m.chat,{image:{url: rando},caption:"here you go"},{quoted:m,})
	} catch {
		m.reply('')
	}
}
break
case 'tourl': {
	if (!quoted) return m.reply(`❌ Could not find any Image/Video in context`)
                m.reply("wait your request is under process")
				try {
        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await arus.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
				} catch {
m.reply("An Error Occurred")
				}
            }
            break
          
        case 'chatid':
        m.reply(`${m.chat}`)
        break
	
		//case 'gn':
		 // let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		//let namT =  await db.get(`${user}-con`) || 'no name'
		//console.log(namT)
		//break
		
//////////////////////////GROUP\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    case 'remove': {
					if (!m.isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin")
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	if (!users) return m.reply("❌ Please tag the user you want to kick")
        await arus.groupParticipantsUpdate(m.chat, [users], 'remove')
 arus.sendMessage(m.chat,{text:`Kicked @${users.split("@")[0]} successfuly `,contextInfo: { mentionedJid: [users] }})
    }
    break
    case 'add': {
		try {
			if (!q) m.reply(`❌ No query provided!`)
		if (!m.isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin")
        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await arus.groupParticipantsUpdate(m.chat, [users], 'add')
        arus.sendMessage(m.chat,{text:`Added @${users.split("@")[0]} successfuly `,contextInfo: { mentionedJid: [users] }})
		} catch { 
		return m.reply("Number does not exsist")
		}
    }
    break
    case 'promote': {
		if (!m.isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin")
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		if (!users) return m.reply("❌ Please tag the user you want to make admin")
        await arus.groupParticipantsUpdate(m.chat, [users], 'promote')
         arus.sendMessage(m.chat,{text:`woh woh!! looks like someone promoted @${users.split("@")[0]}`,contextInfo: { mentionedJid: [users] }})
    }
    break
    case 'demote': {
		if (!m.isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin")
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		if (!users) return m.reply("❌ Please tag the user you want to disadmin")
        await arus.groupParticipantsUpdate(m.chat, [users], 'demote')
        arus.sendMessage(m.chat,{text:`OOPs!! looks like someone demoted @${users.split("@")[0]}`,contextInfo: { mentionedJid: [users] }})
   }
    break
  case 'setdesc': {
        		if (!m.isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin")
                 if (!q) m.reply(`❌ No query provided!`)
                await arus.groupUpdateDescription(m.chat, text)
            m.reply('*Group Description Changed successfuly*')
            }
            break 
case 'seticon': case 'setppgrup': case 'setgpfp': {
     		if (!m.isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin")
                if (!/image/.test(mime)) m.reply("❌ Could not find any Image in context")
                if (/webp/.test(mime)) m.reply("❌ Could not find any Image in context")
                let media = await arus.downloadAndSaveMediaMessage(quoted)
                await arus.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply('💡 Group icone has been changed.')
                }
                break 
case 'tagall':
case 'ping':
  
if (!m.isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin")
if(q) { var Text =`📌 *Message - ${q}*\n*🍁 Group name - ${groupName}*` } else {  var Text = `*${groupName}*`}

let menText = `${Text}\n*💫 ping by - ${pushname}*\n*🕛 time - ${time}*\n\n`
for (let memNum of participants) {
    
    if( groupAdmins.includes(memNum.id) === true ) { var emo = '👑'} else { var emo = '❄️'} 
    menText += `${emo} *@${memNum.id.split('@')[0]}*\n`
    //members_id.push(memNum.jid)
}
arus.sendMessage(m.chat,{text:menText,mentions: participants.map(a => a.id)},{quoted:m})
break

  case 'group': {
        		if (!m.isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin")
             if (args[0] === 'open'){
                await arus.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Group open*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await arus.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Group closed*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: '=group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: '=group close', buttonText: { displayText: 'Close' }, type: 1 },
                        { buttonId: '=linkgc', buttonText: { displayText: 'Group link' }, type: 1 }
                    ]
					const sections = [
    {
	title: "GROUP settings",
	rows: [
	    {title: "close", rowId: "option2", description: "This will close the group"},
	    {title: "open", rowId: "option4", description: "This will open the group"}
	]
    }
]
const listMessage = {
  text: "Choose the required setting",
  footer: "©MIZUHARA-BOTTO 2022",
  title: "",
  buttonText: "settings",
  sections
}
                    await arus.sendMessage(m.chat, listMessage)

            }
}
         
             break
case 'linkgroup': case 'invite': case 'linkgc': {
               if (!m.isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
					if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin")
                let response = await arus.groupInviteCode(m.chat)
         //   m.reply('Has been sent to you in peronal message')
         await arus.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
 break
  case 'delete': case 'del': {
                if (!m.quoted) m.reply("📎 Tag the massage you want to delete")
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) m.reply('❌ I can not delete massage from another userID except mine.')
                arus.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
  case 'enable':
  case 'register':
 case 'act':
 if (!q) m.reply(`❌ No option provided!`)
                                  
                                      if (!isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin");
                                      if (args[0] == "mod") {
                                          	if(_anti.includes(`${m.chat}`)) return m.reply("🛡 *Mod* is already enabled")
												
await db.push("mod",`${m.chat}`)
                                      m.reply('💮 Successfully Enabled *Mod*')
                                      } else if(args[0] == "events"){
                                        	if(_wel.includes(`${m.chat}`)) return m.reply("🗞 *Events* is already enabled")
												console.log(wel)
await db.push("events",`${m.chat}`)
                                      m.reply("💮 Successfully Enabled *Events*")
                                  } else if(args[0] == "wild"){
									  console.log(_wild)
                                        	if(_wild.includes(m.chat)) return m.reply("🔱*Wildness* is already enabled")
												console.log(_wild)
await db.push("wild",m.chat)
                                      m.reply("💮 Successfully Enabled *wildness*")
                                  } 
                                   else{
                                        m.reply("No such options")
                                      } 

                                
  break
 case 'disable':
  case 'unregister':
   case 'deact':
    if (!q) m.reply(`❌ No option provided!`)
                                      if (!isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin");
  if (args[0] == "mod") {
  	if(!_anti.includes(`${m.chat}`)) return m.reply("🛡 *Mod* is already disabled")
await db.pull("mod",`${m.chat}`)
return m.reply("🧩 Successfully Disabled *Mod*");  
 }else if (args[0] == "events") {
 	if(!_wel.includes(`${m.chat}`)) return m.reply("🗞 *Events* is already disabled")
await db.pull("events",`${m.chat}`)
return m.reply("🧩 Successfully Disabled *Events*");  
 }
 else if (args[0] == "wild") {
 	if(!_wild.includes(`${m.chat}`)) return m.reply("🔱 *Wildness* is already disabled")
await db.pull("wild",`${m.chat}`)
return m.reply("🧩 Successfully Disabled *Wildness*");  
 }else{
    m.reply("No such options")
 }
break
///////////////////////////owner//////////////////////

 case 'ban': {
	 if (!isCreator) return m.reply("📍The user of this command must be the owner of the bot")
                      let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!users) return m.reply("❌ Couldn't find any userID in context")	
let user = arus.getName(users)	
                                          	if(_ban.includes(`${users}`)) return m.reply(`${user} is already Banned from Using Commands`)
												
await db.push("ban",`${users}`)
                                      m.reply(`Successfully Banned ${users} from Using Commands`)


 }                          
  break

   case 'unban':{
	   if (!isCreator) return m.reply("📍The user of this command must be the owner of the bot")
                       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!users) return m.reply("❌ Couldn't find any userID in context")	
	let user = arus.getName(users)
  	if(!_ban.includes(`${users}`)) return m.reply(`${users} is not banned`)
await db.pull("ban",`${users}`)
return m.reply(`${users} is now allowed to use Commands again`); 
   } 
break
case 'sauce': {
	if (!quoted) return m.reply(`❌ Could not find any Image in context`)
	const { TraceMoe } = require('trace.moe.ts')
	            //if (/image/.test(mime)) return m.reply(`❌ Could not find any Image in context`)
        let media = await quoted.download()
			const api = new TraceMoe();
		const sauce = await api.fetchAnimeFromBuffer(media).catch((err) => {
			return void M.reply(`Couldn't find any matching results.`);
		});
		const { data: jap } = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${sauce}`)
if(!jap.results[0].title) return m.reply(`❌ Couldn't find any results on the term *${sauce}*`)
const { data } = (await axios.get(`https://api.jikan.moe/v4/anime?q=${jap.results[0].title}`)).data;
			let data3 =
				`*Result:* ${0 + 1} of ${data.length}\n\n*📕Title:* ${data[0].title}/${
					data[0].title_english
				}/${data[0].title_japanese}\n*🔖Trailer:* ${data[0].trailer.url}\n` +
				`*🔍MAL_ID:* ${data[0].mal_id}\n*✴️Type:* ${data[0].type}\n*🎬Episode(s):* ${data[0].episodes}\n*📢Airing:* ${data[0].status}\n*🔔Date:* ${data[0].aired.string}\n` +
				`*🔱Rating:* ${data[0].rating}\n*⚜️Duration:* ${data[0].duration}\n*♨️Score:* ${
					data[0].score
				}\n*📦Studio(s):* ${data[0].studios.map((val) => `${val.name}`).join(", ")}\n` +
				`*🎞️Genre(s):* ${data[0].genres.map((val) => `${val.name}`).join(", ")}\n*📚Synopsis:* ${
					data[0].synopsis
				}`;
arus.sendMessage(m.chat,{image:{url:data[0].images.jpg.image_url},caption:data3},{quoted:m}) 
	
	
}
break
//////////////////////////YOUTUBE\\\\\\\\\\\\\\\\\\\\\\\\\\\\

case  'play': case 'ytplay': {
    if (!q) m.reply(`❌ No query provided!`)
    let yts = require("yt-search")
let { yta  } = require('./lib/y2mate')
m.reply(`🕣 Downloading ${q}`)
    let search = await yts(q)
    let quality = args[1] ? args[1] : '128kbps'
    let media = await yta(search.all[0].url, quality)
	arus.sendMessage(m.chat, { audio: { url: media.dl_link }, contextInfo: {
                    externalAdReply: {
                        title: search.all[0].title.substr(0, 30),
                        body: `author : ${search.all[0].author.name.substr(0, 20)}`,
                        mediaType: 2,
                        thumbnail: await getBuffer(`https://i.ytimg.com/vi/${search.all[0].videoId}/hqdefault.jpg`),
                        mediaUrl: media.url
                    }
                }, mimetype: 'audio/mpeg', fileName: `${search.all[0].title}.mp3` }, { quoted: m})
	
}
break
case 'ytmp3': case 'ytaudio': case 'yta': {
    let { yta  } = require('./lib/y2mate')
    if (!q) m.reply(`❌ No query provided!`)
		if (!isUrl(args[0]) && !args[0].includes('https://youtube.com.com')) return m.reply("🔍 Please provide the youtube link")
   m.reply(`🕣 Downloading ${q}`)
    var search = await yts(q)
    //console.log(search)
    // anu = search.videos[Math.floor(Math.random() * search.videos.length)]
    search=search.all
    let quality = args[1] ? args[1] : '128kbps'
    let media = await yta(q, quality)
    if (media.filesize >= 100000) return m.reply("🕐 Can not fetch audio longer than *10 Minutes*")
    const ycp=`*📓Title* : ${search[0].title}
*🎤Type* : MP3
*🎬Description* : ${search[0].description}
*🌐Link* : ${q}`
arus.sendMessage(m.chat,{image:{url:search[0].thumbnail},caption:ycp},{quoted:m,})
arus.sendMessage(m.chat, { audio: { url: media.dl_link }, contextInfo: {
                    externalAdReply: {
                        title: search[0].title.substr(0, 30),
                        body: `author : ${search[0].author.name.substr(0, 20)}`,
                        mediaType: 2,
                        thumbnail: await getBuffer(`https://i.ytimg.com/vi/${search[0].videoId}/hqdefault.jpg`),
                        mediaUrl: media.url
                    }
                }, mimetype: 'audio/mpeg', fileName: `${search[0].title}.mp3` }, { quoted: m})
}
break
case 'ytmp4': case 'ytvideo': case 'ytv': {
    let { ytv } = require('./lib/y2mate')
    if (!q) m.reply(`❌ No query provided!`)
				if (!isUrl(q) && !q.includes('https://youtube.com.com')) return m.reply("🔍 Please provide the youtube link")
					m.reply(`🕣 Downloading ${q}`)
    let quality = '360p'
    let media = await ytv(q, quality)
    if (media.filesize >= 100000) return m.reply("🕐 Can not fetch audio longer than *10 Minutes*")

arus.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🎯 *Title* : ${media.title}\n🎗️ *File Size* : ${media.filesizeF}\n📓 *Url* : ${q}\n📌 *Ext* : MP3\n🏷️ *Resolution* : 360` }, { quoted: m })
}
break
case 'yts': case 'ytsearch': {
    if (!q) m.reply(`❌No query provided!`)
    let yts = require("yt-search")
    let search = await yts(q)
    let teks = 'YouTube Search\n\n Result From '+ q +'\n\n'
    let no = 1
    for (let i of search.all) {
        teks += `*#${no++}*\n🎯 *Title*: ${i.title}\n🌸 *Duration*: ${i.timestamp}\n🌐 *Url*: ${i.url}\n`
    }
    arus.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },jpegThumbnail:fs.readFileSync('./src/yts.jpg'),  caption: teks, }, { quoted: m, })
}
break
case 'sr': {
	if (!q) m.reply(`❌ No query provided!`)
	const response1 = await axios.get('https://meme-api.herokuapp.com/gimme/' + q + '/');
             const {
                    postLink,
                    title,
                    subreddit,
                    url,
                    nsfw,
                    spoiler
                } = response1.data
				arus.sendMessage(m.chat,{image:{url:url},caption:`*Url*: ${url}\n*Title*: ${title}\n*Postlink*: ${postLink}`},{quoted:m,})
				
}
break
case 'meme':{
	const response = await axios.get('https://meme-api.herokuapp.com/gimme/wholesomeanimemes');
	const { title, url } = response.data
	arus.sendMessage(m.chat,{image:{url:url},caption:`*${title}*`},{quoted:m,})
}
break
case 'join': {
                if (!isCreator) return m.reply("📍The user of this command must be the owner of the bot")
                if (!q) return m.reply("🔍 Please provide the group link")
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply("🔍 Please provide the group link")
                m.reply("wait your request is under process")
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await arus.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) =>m.reply(`Invalid 📘 *URL: ${q}*`))
            }
            break
            case 'leave': {
                if (!isCreator) return m.reply("📍The user of this command must be the owner of the bot")
                await arus.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply("Error"))
            }
            break
					   case 'bass':
					   case 'blown': 
					   case 'deep': 
					   case 'earrape': 
					   case 'fast': 
					   case 'fat': 
					   case 'nightcore':
					   case 'reverse': 
					   case 'robot': 
					   case 'slow': 
					   case 'smooth': 
					   case 'tupai':
					   if (!quoted || !/audio/.test(mime)) return m.reply(`❌ Could not find any audio in context`)
						m.reply("wait your request is under process")
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply("wait your request is under process")
                let media = await arus.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                arus.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else return m.reply(`❌ Could not find any audio in context`)
                } catch (e) {
                m.reply(e)
                }
				break

case 'lyrics':
  const Genius =require("genius-lyrics")
const Client = new Genius.Client();
if (!q) m.reply(`❌ No query provided!`)
	try{
  const searches = await Client.songs.search(q);

  // Pick first one
  const firstSong = searches[0];
  console.log("About the Song:\n", firstSong, "\n");
  
  // Ok lets get the lyrics
  const lyrics = await firstSong.lyrics();
  console.log("Lyrics of the Song:\n", lyrics, "\n");
	
  const reactionMessage = {
    react: {
        text: "🎶",
        key:m.key
    }
}

 await arus.sendMessage(m.chat, reactionMessage)
  arus.sendMessage(m.chat, { text:lyrics, contextInfo: {
    externalAdReply: {
        title:'Lyrics-',
        body:firstSong.title,
        thumbnail: await getBuffer(firstSong.thumbnail),
        //mediaUrl: media.url
    }
}}, { quoted: m})
} catch {
	return m.reply(`❌ No lyrics found!`)
	}

break
case 'ship':{
let usep = m.sender
let recp=`` 
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[usep,users]
} catch {
	users = "none"
	 ment=[usep,m.sender]
}
if(users == 'none'){
     recp =`@${m.sender.split("@")[0]} x  themselves`
     console.log(recp) 
	 
} else { 
let rcpp =`@${users.split("@"[0])}` 
 recp = `@${m.sender.split("@")[0]} x  @${users.split("@")[0]}`

console.log(recp)
}
const ll = Math.floor(Math.random() * 100)
if ( ll < 30 ){
jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\t\tThere's still time to reconsider your choices`
}
else if ( ll > 50 ){
jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\t\t Good enough, I guess!💫`
}
else if ( ll > 70 ){
jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\t\t\tStay together and you'll find a way⭐️`
}
else if ( ll > 90 ){
jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\tAmazing! You two will be a good couple💖`
} else {
jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\tYou two are fated to be together💙`
}
        let caption = `\t❣️ *Matchmaking...* ❣️ \n`
        caption += `\t\t---------------------------------\n`
        caption += `*${recp}*\n`
        caption += `\t\t---------------------------------\n`
        caption += `${jj}`
		arus.sendMessage(m.chat,{text:caption,mentions:ment},{quoted:m})

		}
		
break
case 'gimage':case 'image': {
        if (!q) m.reply(`❌ No query provided!`)
        let gis = require('g-i-s')
        gis(q, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        arus.sendMessage(m.chat, { image: { url: images }, caption: "Here you go" }, { quoted: m })
        })
        }
        break
 case 'google': {
                if (!q) m.reply(`❌ No query provided!`)
                let google = require('google-it')
                google({'query': q}).then(res => {
                let teks = `Google Search From : ${q}\n\n`
                for (let g of res) {
                teks += `📒 *Title* : ${g.title}\n`
                teks += `🎯 *Description* : ${g.snippet}\n`
                teks += `🌐 *Link* : ${g.link}\n\n`
                } 
                m.reply(teks)
                })
                }
                break
 //////////////////////////ANIME\\\\\\\\\\\\\\\\\\\\\\\\               
 case 'waifu': {
               let waifud = await axios.get('https://waifu.pics/api/sfw/waifu')
 arus.sendMessage(m.chat, { image: { url: waifud.data.url }, caption: "Here you go" }, { quoted: m })
 }
                break  
 case 'couplepp': case 'ppcouple': {
                //replay(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                arus.sendMessage(m.chat, { image: { url: random.male }, caption: `Male` }, { quoted: m })
                arus.sendMessage(m.chat, { image: { url: random.female }, caption: `Female` }, { quoted: m })
            }
        break


case 'neko':{
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
 arus.sendMessage(m.chat, { image: { url: waifud.data.url }, caption: "Here you go" }, { quoted: m })
 }             
                break                               
 case 'holo':
case 'fox_girl':
case 'kemonomimi':{
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
 arus.sendMessage(m.chat, { image: { url: waifudd.data.url }, caption: "Here you go" }, { quoted: m })
 }
                break   
                case 'hg' :  {
		try{
				let haigusha = await fetchJson('https://reina-api.vercel.app/api/mwl/random')
				   let textr = "";
		textr += `💙 *Name: ${haigusha.name}*\n`;
		if (haigusha.original_name !== "" && haigusha.original_name !== null)
			textr += `💚 *Original Name: ${haigusha.original_name}*\n`;
		if (haigusha.weight !== null) textr += `⚖ *Weight: ${haigusha.weight}*\n`;
		if (haigusha.height !== null) textr += `📍 *Height: ${haigusha.height}*\n`;
		if (haigusha.bust !== null) textr += `💠 *Bust: ${haigusha.bust}*\n`;
		if (haigusha.hip !== null) textr += `🎗 *Hip: ${haigusha.hip}*\n`;
		if (haigusha.waist !== null) textr += `🎀 *Waist: ${haigusha.waist}*\n`;
		if (haigusha.blood_type !== null)
			textr += `🩸 *Blood Type: ${haigusha.blood_type}*\n`;
		if (haigusha.origin !== null && haigusha.origin !== "") textr += `🎐 *Origin: ${haigusha.origin}*\n`;
		if (haigusha.age !== null&& haigusha.age !== 0) textr += `🎂 *Age: ${haigusha.age}*\n`;
		if (haigusha.likes !== null) textr += `🖤 *Likes: ${haigusha.likes}*\n`;
		textr += `🏅 *Like Rank: ${haigusha.like_rank}*\n`;
		textr += `📈 *Popularity Rank: ${haigusha.popularity_rank}*\n\n`;
		textr += `💛 *Source: ${haigusha.series.name}*\n\n`;
		textr += `🌐 *URL: ${haigusha.url}*\n\n`;
		textr += `❤ *Description:* ${haigusha.description}\n`;
				 arus.sendMessage(m.chat, { image: { url: haigusha.display_picture }, caption: textr }, { quoted: m })
	}catch{
		m.reply(`An Error Occurred`)
			}
				}
			break
case 'anime':
if (!q) m.reply(`❌ No query provided!`)
const { data: jap } = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${q}`)
if(!jap.results[0].title) return m.reply(`❌ Couldn't find any results on the term *${q}*`)
const { data } = (await axios.get(`https://api.jikan.moe/v4/anime?q=${jap.results[0].title}`)).data;
			let data3 =
				`*Result:* ${0 + 1} of ${data.length}\n\n*📕Title:* ${data[0].title}/${
					data[0].title_english
				}/${data[0].title_japanese}\n*🔖Trailer:* ${data[0].trailer.url}\n` +
				`*🔍MAL_ID:* ${data[0].mal_id}\n*✴️Type:* ${data[0].type}\n*🎬Episode(s):* ${data[0].episodes}\n*📢Airing:* ${data[0].status}\n*🔔Date:* ${data[0].aired.string}\n` +
				`*🔱Rating:* ${data[0].rating}\n*⚜️Duration:* ${data[0].duration}\n*♨️Score:* ${
					data[0].score
				}\n*📦Studio(s):* ${data[0].studios.map((val) => `${val.name}`).join(", ")}\n` +
				`*🎞️Genre(s):* ${data[0].genres.map((val) => `${val.name}`).join(", ")}\n*📚Synopsis:* ${
					data[0].synopsis
				}`;
arus.sendMessage(m.chat,{image:{url:data[0].images.jpg.image_url},caption:data3},{quoted:m})   
break
case 'charecter':
case 'chara':{
	if (!q) m.reply(`❌ No query provided!`)
			const client = new Character();
		const chara = await client.character(q).catch((err) => {
			return m.reply(`❌ Couldn't find any results on the term *${q}*`)
		});
		let texty = "";
		texty += `💙 *Name: ${chara.data.characters.results[0].name.full}*\n`;
		texty += `💛 *Source: ${chara.data.characters.results[0].media.edges[0].node.title.userPreferred}*\n\n`;
		texty += `🌐 *URL: ${chara.data.characters.results[0].siteUrl}*\n\n`;
		texty += `❤ *Description:* ${chara.data.characters.results[0].description}\n`;
			const { data: char } = (
				await axios.get(`https://api.jikan.moe/v4/characters?q=${chara.data.characters.results[0].name.full}`)
			).data;
			const { data: anime } = (
				await axios.get(`https://api.jikan.moe/v4/characters/${char[0].mal_id}/anime`)
			).data;
			const { data: voice } = (
				await axios.get(`https://api.jikan.moe/v4/characters/${char[0].mal_id}/voices`)
			).data;
			let data2 =
				`*📕Name:* ${char[0].name}\n*⚜️About:* ${
					char[0].about
				}\n*🔍MAL_ID:* ${char[0].mal_id}\n🌐 *URL:*  ${chara.data.characters.results[0].siteUrl}\n` +
				`\n*🔖Appears:*${anime
					.map((val) => `\n*🔮Role:* ${val.role}\n*🎬Title:* ${val.anime.title}`)
					.join("\n")}\n❤ *Description:* ${chara.data.characters.results[0].description}\n` +
				`\n*👥VA:*${voice
					.map((val) => `\n*🌐Language:* ${val.language}\n*👤Person:* ${val.person.name}`)
					.join("\n")}`;
arus.sendMessage(m.chat,{image:{url:char[0].images.jpg.image_url},caption:data2},{quoted:m})  
}

break
case 'manga':
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if (!q) m.reply(`❌ No query provided!`)
	try {
let srh = await manga.searchManga(q)

    let mang = `🎀 *Title:* ${srh.data[0].title}\n`;
    mang += `📈 *Status:* ${srh.data[0].status}\n`;
    mang += `🌸 *Total Volumes:* ${srh.data[0].volumes}\n`;
    mang += `🎗 *Total Chapters:* ${srh.data[0].chapters}\n`;
    mang += `🧧 *Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
      mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
    }
    mang += `✨ *Published on:* ${srh.data[0].published.from}\n`;
    mang += `🌟 *Score: ${srh.data[0].scored}*\n`;
    mang += `🎐 *Popularity:* ${srh.data[0].popularity}\n`;
    mang += `🎏 *Favorites:* ${srh.data[0].favorites}\n`;
    mang += `✍ *Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
      mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
    }
    mang += `\n🌐 *URL:* ${srh.data[0].url}\n\n`;
    if (srh.data[0].background !== null)
      mang += `🎆 *Background:* ${srh.data[0].background}`;
    mang += `❄️ *Description:* ${srh.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`;
arus.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
	} catch { 
	return m.reply(`❌ Couldn't find any results on the term *${q}*`)
	}

break

case 'wallpaper':
const { AnimeWallpaper } =require("anime-wallpaper")
if (!q) m.reply(`❌ No query provided!`)
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
			if(!wallpaper) return m.reply(`❌ Couldn't find any results on the term *${q}*`)
const i = Math.floor(Math.random() * wallpaper.length);    
            await arus.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`Here you go`},{quoted:m}) 
//arus.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 'pat':{
	var pat = await fetchJson(`https://api.waifu.pics/sfw/pat`)
	try {
		let usep = m.sender
let recp=`` 
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[usep,users]
} catch {
	users = "none"
	 ment=[usep,m.sender]
}
if(users == 'none'){
     recp =`@${m.sender.split("@")[0]} patted themselves`
     console.log(recp) 
	 
} else { 
const rcpp =`@${users.split("@"[0])}` 
 recp= `@${m.sender.split("@")[0]} patted @${users.split("@")[0]} `

console.log(recp)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var sgif = await GIFBufferToVideoBuffer(buffer)
		arus.sendMessage(m.chat,{video: sgif, gifPlayback:true,mentions:ment,caption:recp},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break
case 'hug':{
	var pat = await fetchJson(`https://api.waifu.pics/sfw/hug`)
	try {
		let usep = m.sender
let recp=`` 
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[usep,users]
} catch {
	users = "none"
	 ment=[usep,m.sender]
}
if(users == 'none'){
     recp =`@${m.sender.split("@")[0]} hugged themselves`
     console.log(recp) 
	 
} else { 
const rcpp =`@${users.split("@"[0])}` 
 recp= `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

console.log(recp)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var sgif = await GIFBufferToVideoBuffer(buffer)
		arus.sendMessage(m.chat,{video: sgif, gifPlayback:true,mentions:ment,caption:recp},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break
case 'kiss':{
	var pat = await fetchJson(`https://api.waifu.pics/sfw/kiss`)
	try {
		let usep = m.sender
let recp=`` 
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[usep,users]
} catch {
	users = "none"
	 ment=[usep,m.sender]
}
if(users == 'none'){
     recp =`@${m.sender.split("@")[0]} kissed themselves`
     console.log(recp) 
	 
} else { 
const rcpp =`@${users.split("@"[0])}` 
 recp= `@${m.sender.split("@")[0]} kissed @${users.split("@")[0]} `

console.log(recp)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var sgif = await GIFBufferToVideoBuffer(buffer)
		arus.sendMessage(m.chat,{video: sgif, gifPlayback:true,mentions:ment,caption:recp},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break
case 'slap':{
	var pat = await fetchJson(`https://api.waifu.pics/sfw/slap`)
	try {
		let usep = m.sender
let recp=`` 
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[usep,users]
} catch {
	users = "none"
	 ment=[usep,m.sender]
}
if(users == 'none'){
     recp =`@${m.sender.split("@")[0]} slapped themselves`
     console.log(recp) 
	 
} else { 
const rcpp =`@${users.split("@"[0])}` 
 recp= `@${m.sender.split("@")[0]} slapped @${users.split("@")[0]} `

console.log(recp)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var sgif = await GIFBufferToVideoBuffer(buffer)
		arus.sendMessage(m.chat,{video: sgif, gifPlayback:true,mentions:ment,caption:recp},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break
case 'cuddle':{
	var pat = await fetchJson(`https://api.waifu.pics/sfw/cuddle`)
	try {
		let usep = m.sender
let recp=`` 
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[usep,users]
} catch {
	users = "none"
	 ment=[usep,m.sender]
}
if(users == 'none'){
     recp =`@${m.sender.split("@")[0]} cuddled themselves`
     console.log(recp) 
	 
} else { 
const rcpp =`@${users.split("@"[0])}` 
 recp= `@${m.sender.split("@")[0]} cuddled @${users.split("@")[0]} `

console.log(recp)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var sgif = await GIFBufferToVideoBuffer(buffer)
		arus.sendMessage(m.chat,{video: sgif, gifPlayback:true,mentions:ment,caption:recp},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break
case 'kick':{
	var pat = await fetchJson(`https://api.waifu.pics/sfw/kick`)
	try {
		let usep = m.sender
let recp=`` 
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[usep,users]
} catch {
	users = "none"
	 ment=[usep,m.sender]
}
if(users == 'none'){
     recp =`@${m.sender.split("@")[0]} kicked themselves`
     console.log(recp) 
	 
} else { 
const rcpp =`@${users.split("@"[0])}` 
 recp= `@${m.sender.split("@")[0]} kicked @${users.split("@")[0]} `

console.log(recp)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var sgif = await GIFBufferToVideoBuffer(buffer)
		arus.sendMessage(m.chat,{video: sgif, gifPlayback:true,mentions:ment,caption:recp},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break
  case 'bc': case 'bcgroup': {
                if (!isCreator) return m.reply("📍The user of this command must be the owner of the bot")
                if (!q) return m.reply("❌ No query provided!")
                let getGroups = await arus.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(` Broadcasting in ${anu.length} Group Chat, in ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    
  let txt = `🔰</ _*Arus Broadcast*_ >🔰\n\n🍀 *Author:* ${pushname}\n\n🔖 *Message:* ${q}`
//const stick=fs.readFileSync(`./src/right.webp`)
//await arus.sendMessage(m.chat,{sticker:stick},{quoted:m})      
await arus.sendMessage(i, { video: { url: "https://telegra.ph/file/3c3f94c8463e7f9c29d73.mp4" }, mimetype: 'video/mp4', fileName: `bc.mp4`, caption: `${txt}` })
                    }
                m.reply(`Successfuly Broadcasted in ${anu.length} Groups`)
            }
            break           
            default:
arus.sendMessage(m.chat,{text:`❗ Couldn't find any matching commands. Try again with the commands from the help list`},{quoted:m})
        }
        

    } catch (err) {
        console.log(util.format(err))
        const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
        //arus.sendMessage("12033039020236931@g.us",{text:`*Time:* ${time}\n\n`+`*ERROR:* ${util.format(err)}`})
    
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
