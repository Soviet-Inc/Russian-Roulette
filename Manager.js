const Discord = require("discord.js");
const dbl = require("dblapi.js")
const app = require("express")()

const ConfigFile = require("./config")

const client = new Discord.Client();

app.post("/vote",(req,res) => {
    console.log(req.body.type)
    console.log(req.ip)
})

client.login(ConfigFile.config.token);
app.listen(process.env.PORT || 3000)