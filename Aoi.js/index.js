const aoijs = require("aoi.js");
require("dotenv").config();

const bot = new aoijs.AoiClient({
    token: process.env.TOKEN,
    prefix: '$getServerVar[prefix]',
    intents: ['GUILDS', 'GUILD_MESSAGES']
});

//Events
bot.onMessage();

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, './commands/')

require("./handler/status")(bot)
require("./handler/variabel")(bot)