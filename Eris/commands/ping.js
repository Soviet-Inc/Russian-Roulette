const eris = require("eris");
const quickDb = require("quick.db")
const ms = require("ms")

const config = require("../config").config
const {isNull} = require("util")

let command = {
  description:{
    Name:"ping",
    Information:{
      description: "Get the ping",
      fullDescription: "Get the ping of the bot",
      usage: "",
      type: "misc"
    }
  },
  Alias:"pong",
  RunCommand(args, msgObject,commands,client) {
    //console.log(commands)
    msgObject.channel.createMessage({
        embed: {
        title: `Bot Ping`,
        description: `Pinging...`,
        color: 0xF45B4D
        }
    }).then(msg => {
        msg.edit({
            embed: {
                title: `Bot Ping`,
                description: `Ping: ${ms(msg.timestamp-msgObject.timestamp)}`,
                color: 0xF45B4D
             }
        })
    })
  }
}

module.exports = command
