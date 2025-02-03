//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "255620814108,255764182801,255776663848,255752593977";
global.sudo = process.env.SUDO || "255620814108,255764182801,255776663848,255752593977";
global.owner = process.env.OWNER_NUMBER || "254742631997";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhZNHdDandEbElZaURDaVNkZUZCWVBOWS9NL2FsV1o0ZFllajRTRXQwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajRDQkt0eUhlSUFWbTJjeGFjRXBoMTNpbVZPOXZlQmdWOS9kNjd2T3BoVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrT1lJQ3R6bC9WdHlhUHJHVFNwa1ErdXdBOStuUGxpbEpIeDBvKzZoWFZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRDFjZG1oU2tveDhZMlBDSGY2VkJ6TGwwNlVQZzdsRFNNSy92UHlNRFNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlOZW9zNHBvblhmNXFid1ZMN29ORnQ5Q0ZlMUhydSt6Q0JZcmc0QlFQM1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilc4OVhTRFBqaHMzakpXaUN0ZE9PNTFTWGZKZ01uZzJRM3prRE1JRlpNRWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0hRL1lvNVdVQlN3WEZPaE1TdjFnSmJFTmxnQmsxUjJ5a25iTFdkV00wZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOER4LzBFQ0xaQmpIRHVTaWZFaHRZN0p2d3VURlJ2SElzYTFZNXR1Y0h5Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxuU1h2ZHloeXZMMFFUeDR5cTNCbk1CVTFqR1N6bW91RncydCsyajNXTlpGSy93eE51RVRmNWJxc0FoWnQzYisxNGhYUU12L2lDNGhGN0FoL3ljOWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiJOUHA5OXVBclc1THd2dnU4ZWlZVEVnSGE0V3BwS3RmVE5zY2Vwc2Fud2UwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJLTktTmpQRFMtaTN1NlhyUWN1RlRRIiwicGhvbmVJZCI6Ijk1MWMwMThmLTljZjMtNGIzNS1iYWQyLWU3ZTQyZjAyYzY5OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtYkhORFdTdGxtVG04Rm4vQW0xWUxKQm1SS2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0lhd3hiOVlzcjRVcitGL0wzOTFCRWgyUG1JPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjkxSFRFQzhIIiwibWUiOnsiaWQiOiIyNTQ3NDI2MzE5OTc6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLZgdiu2K/YrditIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJV3FzZWNFRUw3T2dyMEdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCWk1EZWtnTTVRRG0vTWF3Q2h0YmNEaVppaXJHQllGUXcvRDIrdUxNZ1dJPSIsImFjY291bnRTaWduYXR1cmUiOiJrdGtSaTlsK213Q05PdHhLNnVpSTN2dnFEMy9ucks1aklKTkk0WEZqaDlZVlJpSXBYa2tRVWJseXR4Q04zekdyeHF6Vy9RTFUrOFd6SmgxOVcyT0VEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieXM0Sk04bkk3Q0x5cFV5bjkvdFZxSUhXNnNYMnNJV0xIdXNwTzM4YUhoSlhNZnNNZG8rdTdnLzJQbFplTjJJZTJzWjg1QTNpZ0R6TjMwTUN1N0wvanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NDI2MzE5OTc6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRV1RBM3BJRE9VQTV2ekdzQW9iVzNBNG1Zb3F4Z1dCVU1Qdzl2cml6SUZpIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM4NTgxODM2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtzYiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐅𝚪𝚵𝐂𝐘𝚩𝚵𝚪 𝚳𝐃",
  author: process.env.PACK_AUTHER || "FRECYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FRECYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "FRECYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
