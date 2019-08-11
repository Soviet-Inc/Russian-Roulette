const eris = require("eris");
const quickDb = require("quick.db")
const ms = require("ms")

const config = require("../config").config
const {isNull} = require("util")

let command = {
  description:{
    Name:"info",
    Information:{
      description: "Get information",
      fullDescription: "Get information on the bot",
      usage: "",
      type: "misc"
    }
  },
  Alias:"information",
  RunCommand(args, msgObject,commands,client) {
    //console.log(commands)
    msgObject.channel.createMessage({
        embed: {
        title: `Bot Information`,
        description: `Owner: Russian Roulette W/ 6 Bullets#1922 \n Library: Eris \n Support Server: [Link](https://discord.gg/EVhGh8S) \n Github Repository: [Link](https://github.com/MraClean/Russian-Roulette) \n Invite: [Link](https://discordapp.com/api/oauth2/authorize?client_id=584905179032190997&permissions=8&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Fdevelopers%2Fapplications%2F584905179032190997%2Foauth&scope=bot) \n Vote: [Link](https://discordbots.org/bot/584905179032190997/vote)`,
        color: 0xF45B4D,
        fields: [
            {
                name: "Uptime",
                value: `${ms(client.uptime)}`,
                inline: true
            },
            {
                name: "Guilds",
                value: `${client.guilds.size}`,
                inline: true
            },
            {
                name: "Users",
                value: `${client.users.size}`,
                inline: true
            },
            {
                name: "Discriminator",
                value: `${client.user.username}#${client.user.discriminator}`,
                inline: true
            },   
            {
                name: "Mention",
                value: `${client.user.mention}`,
                inline: true
            },        
        ],
        }
    })
  }
}

module.exports = command
