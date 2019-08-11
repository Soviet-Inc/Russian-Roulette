const eris = require("eris");
const quickDb = require("quick.db")

const config = require("../config").config
const {isNull} = require("util")

let command = {
  description:{
    Name:"help",
    Information:{
      description: "Get help",
      fullDescription: "Get list of all commands",
      usage: "<optional-command_name>",
      type: "misc"
    }
  },
  Alias:"halp",
  RunCommand(args, msgObject,commands) {
    //console.log(commands)
    if(args[0]){
        let command = String(args[0]).toLowerCase()
        for (let i = 0; i < commands.length; i++) {
            const commandObject = commands[i];
            if(command === commandObject.name || command === commandObject.alias) {
                let information = commandObject.information.Information
                msgObject.channel.createMessage({
                    embed: {
                    title: `Help: ${commandObject.name}`,
                    description: `Short Description: ${information.description} \n Full Description: ${information.fullDescription} \n Usage: ${commandObject.name} ${information.usage} \n Type: ${information.type} \n Alias: ${commandObject.alias}`,
                    color: 0xF45B4D
                    }
                })
                return
            }
        }
        msgObject.channel.createMessage({
            embed: {
            title: `Help Section`,
            description: `We could not find the command you were looking for.`,
            color: 0xF45B4D
            }
        })
        return
    }else{
        let misc = []
        let economics =[]
        let fun = []
        let moderation = []
        for (let i = 0; i < commands.length; i++) {
            const commandObject = commands[i]
            const information = commandObject.information.Information

            if(information.type == "misc"){misc.push(`\n ${commandObject.name} | ${commandObject.alias}`)}
            if(information.type == "economics"){economics.push(`\n ${commandObject.name} | ${commandObject.alias}`)}
            if(information.type == "fun"){fun.push(`\n ${commandObject.name} | ${commandObject.alias}`)}
            if(information.type == "moderation"){moderation.push(`\n ${commandObject.name} | ${commandObject.alias}`)}
        }

        msgObject.channel.createMessage({
            embed: {
            title: `Help`,
            description: `A list of all the commands`,
            color: 0xF45B4D,
            fields: [
                {
                    name: "Fun",
                    value: `Commands:\n${fun}`,
                    inline: true
                },
                {
                    name: "Economics",
                    value: `Commands:\n${economics}`,
                    inline: true
                },
                {
                    name: "Moderation",
                    value: `Commands:\n${moderation}`,
                    inline: true
                },
                {
                    name: "Misc",
                    value: `Commands:\n${misc}`,
                    inline: true
                },
            ],
            }
        })
    }
  }
}

module.exports = command
