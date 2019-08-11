const eris = require("eris");
const quickDb = require("quick.db")

const config = require("../config").config
const client = require("../index")
const {isNull} = require("util")

let command = {
  description:{
    Name:"roulette",
    Information:{
      description: "Play roulette",
      fullDescription: "Play roulette with x bullets",
      usage: "<players>",
      type: "fun"
    }
  },
  Alias:"r",
  RunCommand(args, msgObject) {
    let mentioned = msgObject.mentions
    let results = [];

    if (mentioned.length == 0) {
      msgObject.channel.createMessage("Please mention at least 1 person!");
      return;
    }

    msgObject.channel.createMessage("Calculating results!");

    let number = Math.floor(Math.random() * (6 - 1) + 1);

    function Play(Current) {
      const user = mentioned[Current];
      if (Current + 1 == number) {
        results.push(`\n ${user.username}'s gun: **BANG**`);

        if(isNull(quickDb.get(`${user.id}`))){
            quickDb.set(`${user.id}`,{"Wins":0,"Loses":1,"Money":0,"Draws":0,"Inventory":{}})
        }else{
            quickDb.add(`${user.id}.Loses`,1)
        }

      } else {
        results.push(`\n ${user.username}'s gun: *click*`);

        if(isNull(quickDb.get(`${user.id}`))){
            quickDb.set(`${user.id}`,{"Wins":1,"Loses":0,"Money":0,"Draws":0,"Inventory":{}})
        }else{
            quickDb.add(`${user.id}.Wins`,1)
        }
        
      }
    }

    for (let Current = 0; Current < mentioned.length; Current++) {
      Play(Current);
    }

    msgObject.channel.createMessage({
        embed: {
            title: "Results",
            description: `${results.map(x => x)}`,
            color: 0xF45B4D
        }
    })
  }
}

module.exports = command
