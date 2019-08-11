const eris = require("eris");
const quickDb = require("quick.db")

const config = require("../config").config
const {isNull} = require("util")

let command = {
  description:{
    Name:"kickroulette",
    Information:{
      description: "Play kick roulette",
      fullDescription: "Play a game of kick roulette, lose and you get kicked",
      usage: "<players>",
      type: "fun"
    }
  },
  Alias:"kr",
  RunCommand(args, msgObject) {
    let mentioned = msgObject.mentions
    let results = [];

    if(!msgObject.member.permission.has("kickMembers")){return msgObject.channel.createMessage("I can't let you do this without permissions")}

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
        msgObject.channel.guild.kickMember(user.id,`Lost game of kick roulette`).catch(err => {
            msgObject.channel.createMessage("Can't kick user!");
        })

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
