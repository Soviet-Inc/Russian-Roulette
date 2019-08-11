const eris = require("eris");
const quickDb = require("quick.db")

const config = require("../config").config
const client = require("../index")
const {isNull} = require("util")

let command = {
  description:{
    Name:"stats",
    Information:{
      description: "Check your stats",
      fullDescription: "Check your stats ex: Wins",
      usage: "<optional-mention>",
      type: "economics"
    }
  },
  Alias:"profile",
  RunCommand(args, msgObject) {
    let mentioned = msgObject.mentions
    let results = [];

    if (mentioned.length == 0) {
        let user = msgObject.member.user
        if(isNull(quickDb.get(`${user.id}`))){
            quickDb.set(`${user.id}`,{"Wins":0,"Loses":0,"Money":0,"Draws":0,"Inventory":{}})
        }
        let Inventory = quickDb.get(`${msgObject.member.user.id}.Inventory`)
        if(!Inventory == {}){
            Inventory = Inventory.map(x => x.Name)
        }else{
            Inventory = "None!"
        }
        let Stats = [
            `Wins: ${quickDb.get(`${msgObject.member.user.id}.Wins`)}`,
            `\nDraws: ${quickDb.get(`${msgObject.member.user.id}.Draws`)}`,
            `\nLoses: ${quickDb.get(`${msgObject.member.user.id}.Loses`)}`,
            `\nMoney: ${quickDb.get(`${msgObject.member.user.id}.Money`)}`,
            `\nInventory:\n ${Inventory}`,
        ]
        msgObject.channel.createMessage({
            embed: {
                title: `${msgObject.member.user.username}'s Stats`,
                description: `${Stats}`,
                color: 0xF45B4D
            }
        })
    }else{
        let user = mentioned[0]
        if(isNull(quickDb.get(`${user.id}`))){
          quickDb.set(`${user.id}`,{"Wins":0,"Loses":0,"Money":0,"Draws":0,"Inventory":{}})
        }
        let Inventory = quickDb.get(`${user.id}.Inventory`)
        if(!Inventory == {}){
            Inventory = Inventory.map(x => x.Name)
        }else{
            Inventory = "None!"
        }
        let Stats = [
            `Wins: ${quickDb.get(`${user.id}.Wins`)}`,
            `\nDraws: ${quickDb.get(`${user.id}.Draws`)}`,
            `\nLoses: ${quickDb.get(`${user.id}.Loses`)}`,
            `\nMoney: ${quickDb.get(`${user.id}.Money`)}`,
            `\nInventory:\n ${Inventory}`,
        ]
        msgObject.channel.createMessage({
            embed: {
                title: `${user.username}'s Stats`,
                description: `${Stats}`,
                color: 0xF45B4D
            }
        })
    }
  }
}

module.exports = command
