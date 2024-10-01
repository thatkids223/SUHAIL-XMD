const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="bwabymoudy@gmail.com"
global.location="Bamako,Mali."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://new_me_user:NxZiXpipq57qqBJzXTckpeiJUwMy4mtd@dpg-crpkqmdds78s73dbf45g-a.oregon-postgres.render.com/new_me"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Mali";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/KnVwkSJKwJcKuE4rhR5CfX";
global.website=process.env.GURL || "https://chat.whatsapp.com/KnVwkSJKwJcKuE4rhR5CfX" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/dtzEm5F.jpg" || "https://iili.io/dtzEm5F.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴜɴ ʙᴏᴛ ᴅᴇᴘʟᴏʏé ᴘᴀʀ ᴍᴏᴜᴅʏ ʟᴇ ᴄʜʏᴇɴɢ." 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "50940997535,243903040009";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22395064497";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://iili.io/d6M3rnn.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_42_09_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzMixcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDY3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDc5LFxuICAgICAgICA0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMixcbiAgICAgICAgMjEwLFxuICAgICAgICA1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICA1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSUtUS0RlNjZzQnp6UTk2b2dlRlVPT1V1L3MwTVpwWW42MVRYc0RnT0VKcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUzVNSk1wWWJRZ1dMM09GOUNfOTd5QVwiLFxuICBcInBob25lSWRcIjogXCI5NDBjZDU3YS0xMGY0LTQ5ZjgtOTk1NC0wYzVjOWMwMGJlZDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTYsXG4gICAgICAyMzgsXG4gICAgICA1MCxcbiAgICAgIDIzOCxcbiAgICAgIDUsXG4gICAgICAxNjMsXG4gICAgICAxNjAsXG4gICAgICAxMDgsXG4gICAgICAyMDgsXG4gICAgICAxNjgsXG4gICAgICA4OSxcbiAgICAgIDIyOCxcbiAgICAgIDM2LFxuICAgICAgMTMyLFxuICAgICAgMTM5LFxuICAgICAgMTQ5LFxuICAgICAgOTQsXG4gICAgICAxOSxcbiAgICAgIDEwOSxcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc1LFxuICAgICAgMjAwLFxuICAgICAgMTIwLFxuICAgICAgNjIsXG4gICAgICA2OCxcbiAgICAgIDExOCxcbiAgICAgIDI0NCxcbiAgICAgIDgxLFxuICAgICAgNTksXG4gICAgICAxNjQsXG4gICAgICAzMCxcbiAgICAgIDEzLFxuICAgICAgMTQ5LFxuICAgICAgMjEsXG4gICAgICA5NCxcbiAgICAgIDk0LFxuICAgICAgMjI3LFxuICAgICAgMjQ1LFxuICAgICAgMjE1LFxuICAgICAgMTQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5BSDFCRjlNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjM5NTA2NDQ5Nzo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjcyNTQ1OTA3NDk0OTI3OjY2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuGlh+GtmeqqluGlh+qql+KYhO+4jlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1Bic3lyME1FSldnNkxjR0dCRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMnJDR3J4Y0pOeVBtZ0g3UnRCQmpiTlR4VG1PVnhnZE9HVnI5MGNHZlhTdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBaUVBN2wzNVo4ZWUrWlJKQ2E3QWtxL2tLV1VNMmVVdE01cm5YZ1RVRjdoMUhFcThhbU1sbURidFdTc2tzK3hubk12YXU5dVQwQVNxTjVHZVY1VzdoQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1aGZkYzVRamxrdzVvRWY0RjRKWFpHdmtLZjBlWENmaDVZOFJDUk1kclZHZFNVV0hjYjZpazZ0QkpCeGRrZS9Wbmw3M0wxQUttbmpJNHZQd3dnZ0xqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjM5NTA2NDQ5Nzo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc2NjQxNTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHSUdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdJRy5qc29uIjogIntcImtleURhdGFcIjpcInMySXBVSG1DclBoa05wNkFxaW1oQko3ZzVKUzVJMmtUem5KanBIVUVWZUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzM1MDM3ODEwMixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzEsMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjczMDcxMDgxMTlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Suhail-Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "~",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "᥇᭙ꪖ᥇ꪗ☄︎",
  packname: process.env.PACK_NAME || "᥇᭙ꪖ᥇ꪗ☄︎",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "᥇᭙ꪖ᥇ꪗ☄︎",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-hmdY9XmrfIROBAuKhX7OT3B|bkFJfKO5STsjxGn7UDLMWzn9",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
