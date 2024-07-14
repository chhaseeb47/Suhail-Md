const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_18_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU0LFxuICAgICAgICA3MixcbiAgICAgICAgMTA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDc0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUzLFxuICAgICAgICAzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4LFxuICAgICAgICA2MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MCxcbiAgICAgICAgNixcbiAgICAgICAgOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMixcbiAgICAgICAgNDksXG4gICAgICAgIDc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNixcbiAgICAgICAgMjQzLFxuICAgICAgICA4NixcbiAgICAgICAgMjM5LFxuICAgICAgICA1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3OSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxODUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE3LFxuICAgICAgICA3MixcbiAgICAgICAgMjMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpZnZ6TTJOUVAwTC9DOUdyQ2ZoRmlBU0JINHBHYzJyU0FNV0FSNk1hdVhzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIycm5TUHVQaFEwbTJ0VFJJUmV6UWVRXCIsXG4gIFwicGhvbmVJZFwiOiBcImMyOWU1NzRjLWFiZmItNDg1MS04ZTJiLTY3ZjkxMWI3YjA4M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OSxcbiAgICAgIDczLFxuICAgICAgODcsXG4gICAgICAxOSxcbiAgICAgIDQsXG4gICAgICAxMjUsXG4gICAgICAyMjAsXG4gICAgICAxMzQsXG4gICAgICAzNixcbiAgICAgIDY2LFxuICAgICAgODEsXG4gICAgICAxNjgsXG4gICAgICA2LFxuICAgICAgMjEwLFxuICAgICAgMzksXG4gICAgICAyMjcsXG4gICAgICAzMCxcbiAgICAgIDEzMSxcbiAgICAgIDExMSxcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMixcbiAgICAgIDUwLFxuICAgICAgMTEsXG4gICAgICAxMzksXG4gICAgICA5NSxcbiAgICAgIDE5NixcbiAgICAgIDE2LFxuICAgICAgMjM3LFxuICAgICAgMTQ2LFxuICAgICAgMTkwLFxuICAgICAgMTI2LFxuICAgICAgMzMsXG4gICAgICAxMzMsXG4gICAgICAzMyxcbiAgICAgIDM2LFxuICAgICAgMTg4LFxuICAgICAgNjAsXG4gICAgICA3NixcbiAgICAgIDI4LFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGV6bXJVREVQR3MwTFFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwS21GNGtSL3d0M0ExTHlueTQ5dk12TExjdlEzQlJmeHJQaHpkN1pjd0ZNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxKOURhNzR3dTBWdWNCZXQ1TVB5NTd3bVh3cVlQOXB2SU0xbXdBUTN0SmNvSVBEQ0JpamdJVWFTcDhQeVZCY0ZVaG4vR3dHVm9ZZHNiN3BRVkVsa0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFWdDhrSGo3cXVEZGhEVG5QYkt1endBU01CUHFtVHBtOERTTjBnZ0hWS292QnRESy9qbXA1M2Z6cjkyUlhiRnY2eVpqTG9vbk5CdjN6TDZDN04xdGlnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNzA0MTU0NjQxOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDAwNzc1MzYzNDIyMjc6MjJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM3MDQxNTQ2NDE6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTgxMTEwXG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
