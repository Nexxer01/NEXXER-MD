const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════,[Make sure you put all values in "" , '']\\
global.owner = process.env.OWNER_NUMBER || '918474879823' ; // Add Your Number without +
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Nexxer:nexxersama001@cluster0.4yzjhtb.mongodb.net/?retryWrites=true&w=majority" ; // put mongodb key here
global.port=5000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363169665426586@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363169665426586@g.us' ;
global.email = 'HELP_SIGMA-MD@outlook.com' ; 
global.github = 'https://github.com/Nexxer777/SIGMA-MD' ;
global.location = 'Lahore Pakistan' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Karachi' //add correct timezone or leave it same , otherwise you get erros
global.gurl = 'https://www.youtube.com/@InnoxentTech?sub_confirmation=1' ; 
global.sudo =  process.env.SUDO || "916003951523" ; // Do not change it
global.devs = "923466319114"; //Dont change it From here
global.mztit = process.env.MZTIT ||"𝚮𝚰𝚴𝚫𝚻𝚫", // add your title here
global.Gname = process.env.GNAME ||"ɴᴇxxᴇʀ ᴹᴰ",
global.zyt = process.env.ZYT || '',
global.waUrl = process.env.WAURL ||"https://chat.whatsapp.com/DF3fnIHbFxWEY3bqUAf7Is",
global.website = 'https://instagram.com/nexxer_sama?igshid=NGVhN2U2NjQ0Yg==' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://wallpapercave.com/uwp/uwp3865716.jpeg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || '',      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'ɴᴇxxᴇʀ ᴹᴰ',  // add the botname you want
  ownername:  process.env.OWNER_NAME || `𝚴ᥱꪎꪎᥱʀ ꢺᴀ⃖͢ϻᴀቾ`, // add your name
  author:  process.env.PACK_AUTHER || '\t ㅤㅤ  🔮ʜᴀɴᴅᴄʀᴀғᴛᴇᴅ ʙʏ :\n\n━『 𓄂⍣⃝🇳ᥱꪎꪎᥱʀ ꢺᴀ⃖͢ϻᴀቾ 🕊️ 』━', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false', // if it true it automatically views status and send status in your inbox
  packname:  process.env.PACK_NAME || "" , 
  autoreaction: process.env.AUTO_REACTION || 'false', // if it true it will react to all messages
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'falsw', // it will show always online, false it if you dont want
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'true', // it will read all your messages, false it if you dont want
  HANDLERS: process.env.PREFIX || '-',
  warncount : process.env.WARN_COUNT || 4,
  disablepm: process.env.DISABLE_PM || "false", // if true it will disable your pm
  MsgsInLog:process.env.MSGS_IN_LOG ||'true',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'true',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true', 
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com,fb.com,instagram.com,https://',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "34wcCGPoe3yaGtpiBZgx4SN7", // add your remove bg key if you have it
  caption :process.env.CAPTION || "\t*⤹★ᴘᴏᴡᴇʀᴇᴅ ʙʏ★⤸ ɴᴇxxᴇʀ sᴀᴍᴀ* ",   //*,
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'true' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'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' , // add your openai key if you have it
  VERSION: process.env.VERSION || '𝚅.𝟷.𝟸.𝟽',
  LANG: process.env.THEME|| 'HINATA',
  menu : process.env.MENU || '', // Not Available in current Version
  WORKTYPE: process.env.WORKTYPE || 'public' // if private only you can use your bot, if public everyone use your bot
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
