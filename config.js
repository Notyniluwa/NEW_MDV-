██████╗ ██╗███████╗███████╗██████╗       ███╗   ███╗██████╗ 
██╔══██╗██║╚══███╔╝██╔════╝██╔══██╗      ████╗ ████║██╔══██╗
██║  ██║██║  ███╔╝ █████╗  ██████╔╝█████╗██╔████╔██║██║  ██║
██║  ██║██║ ███╔╝  ██╔══╝  ██╔══██╗╚════╝██║╚██╔╝██║██║  ██║
██████╔╝██║███████╗███████╗██║  ██║      ██║ ╚═╝ ██║██████╔╝
╚═════╝ ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝      ╚═╝     ╚═╝╚═════╝ 

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/adc46970456c26cad0c15.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLOW THEIR, QUEEN ANJU IS ALIVE...\n\nOWNER: jester\n\nTHANKS FOR USING QUEEN ANJU MD\n\n> *DIZER - ᴍᴅ*/n/n*> ɢɪᴛʜᴜʙ :* github.com",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
BOT_NUMBER: process.env.BOT_NUMBER || "94781029321",
OWNER_REACT: process.env.OWNER_REACT || "🔆",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
READ_CMD: process.env.READ_CMD || "true",
};

