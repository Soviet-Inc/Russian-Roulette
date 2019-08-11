const eris = require("eris");
const quickDb = require("quick.db")
const ms = require("ms")

const config = require("../config").config
const {isNull} = require("util")

let command = {
  description:{
    Name:"purge",
    Information:{
      description: "Purges messages",
      fullDescription: "Purges messages from current guild",
      usage: "<amount>",
      type: "moderation"
    }
  },
  Alias:"bulkdelete",
  RunCommand(args, msgObject,commands,client) {
    //console.log(commands)
    if(!msgObject.member.permission.has("manageMessages")){return msgObject.channel.createMessage("I can't let you do this without permissions")}
    if(isNaN(Number(args[0]))){
        return msgObject.channel.createMessage("Please put in a valid number!")
    }
    msgObject.channel.purge(Number(args[0])+1).catch(err => msgObject.channel.createMessage("Can't purge anymore messages"))
  }
}

module.exports = command
