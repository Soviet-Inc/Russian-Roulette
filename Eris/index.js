const eris = require("eris")
const dbl = require("dblapi.js")
const mongoose = require("mongoose")

const {isNull} = require("util")

require("dotenv").config()

const config = require("./config").config

var client = new eris.CommandClient(config.token);

var commands = []

const guildModel = require("./models/guild")
const userModel = require("./models/user")

mongoose.connect(process.env.mongodb, { useNewUrlParser: true }, () => console.log("Connected to mongodb!"));

client.on('ready', () => {
    initialize()
    
    console.log("Bot Online")

    setInterval(() => {
        initialize()
    }, 30000)
})

client.on(`messageCreate`, (msg) => {
    
    guildModel.findOne({
        guildId:msg.channel.guild.id
    }, (err,guild) => {
        let prefix
        if(!guild){prefix = "rre!"}else{
            prefix = guild.prefix
            Update()
        }
        if (err){console.error(err)}

        userModel.findOne({
            UserId:msg.member.user.id
        }, (err,user) => {
            if (err){console.error(err)}
            if(!user) {
                const newUser = new userModel({
                    UserId: msg.member.user.id,
                    wins: 0,
                    draws: 0,
                    loses: 0,
                    money: 0,
                    inventory: []
                })
                return newUser.save()
            }
        })

        if(!msg.content.startsWith(prefix)){
            return;
        }
    
        if (msg.member.bot) {
            return;
        }
        if (!msg.member) {
            return;
        }
        if(!msg.channel.type == 0) {
            return;
        }
    
        runCommand(msg)
    })
})

function loadCommands(Path){
    if (!config || config.commands.length === 0) {
        return;
    }
    for (const commandName of config.commands) {
        let command = require(`${Path}/${commandName}`)
        let information = command.description;

        commands.push({name: commandName, alias: command.Alias, information: information, run: command.RunCommand})
    }
}

function runCommand(msg){
    guildModel.findOne({
        guildId:msg.channel.guild.id
    }, (err,guild) => {
        let prefix
        if(!guild){prefix = "rre!"}else{
            prefix = guild.prefix
            Update()
        }
        if (err){console.error(err)}
        let command = msg.content.split(" ")[0].replace(prefix, "");
        let args = msg.content.split(" ").slice(1);
    
        command = String(command).toLowerCase()
    
        for (let i = 0; i < commands.length; i++) {
            const commandObject = commands[i];
            if(command === commandObject.name || command === commandObject.alias) {
                commandObject.run(args,msg,commands,client)
            }
        }
    })
}

async function Update() {
    for(i = 0,i < client.guilds.size;i++;){
        id = client.guilds[i].id
        configModel.findOne({
            guildId: id,
        },(err,guild) => {
            if(err) console.error(err)

            if(!guild){
                const newConfig = new configModel({
                    guildId: id,
                    prefix: ConfigFile.config.prefix
                })

                return newConfig.save()
            }
        }
        )
    }
    client.editStatus(`online`,{name:`${client.users.size} Users | Guilds: ${client.guilds.size}`,type:3,url:"https://discordbots.org/bot/584905179032190997/vote"})
}

function initialize() {
    loadCommands(`${__dirname}/commands`)
    Update()
}

client.connect()