const eris = require("eris")
const quickDb = require("quick.db")
const dbl = require("dblapi.js")

const {isNull} = require("util")

const config = require("./config").config

var client = new eris.CommandClient(config.token);

var commands = []

loadCommands(`${__dirname}/commands`)

client.on('ready', () => {
    console.log("Bot Online")
})

client.on(`messageCreate`, (msg) => {
    let user = msg.member.user.id
    let prefix = "rre!"
    if(isNull(quickDb.get(`${user.id}`))){
        quickDb.set(`${user.id}`,{"Wins":0,"Loses":0,"Money":0,"Draws":0,"Inventory":{}})
    }

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
    let prefix = "rre!" // Note to replace this
    let command = msg.content.split(" ")[0].replace(prefix, "");
    let args = msg.content.split(" ").slice(1);

    command = String(command).toLowerCase()

    for (let i = 0; i < commands.length; i++) {
        const commandObject = commands[i];
        if(command === commandObject.name || command === commandObject.alias) {
            commandObject.run(args,msg,commands,client)
        }
    }
}

client.connect()