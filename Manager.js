const Discord = require("discord.js");
const dblapi = require("dblapi.js")
const http = require("http")

const ConfigFile = require("./config")

const server = http.createServer().listen(process.env.PORT || 3000,"https://russian-roulette-discord-bot.herokuapp.com")

const client = new Discord.Client();
const dbl = new dblapi(process.env.dblToken,{webhookAuth:process.env.authentication, webhookPath: "/vote", webhookServer:server})

dbl.webhook.on('ready', hook => {
    console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
  });
  dbl.webhook.on('vote', vote => {
    console.log(`User with ID ${vote.user} just voted!`);
});


client.login(ConfigFile.config.token);