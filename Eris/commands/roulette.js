const eris = require("eris");

const config = require("../config").config
const client = require("../index")
const {isNull} = require("util")

const guildModel = require("../models/guild")
const userModel = require("../models/user")

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
      }
      else {
          results.push(`\n ${user.username}'s gun: *click*`);
      }
      userModel.findOne({
          UserId:user.id
      }, (err,user) => {
          if (err){console.error(err)}
          if(!user) {
              let Result

              if (Current + 1 == number) {
                  Result = false
              }
              else {
                  Result = true
              }
              if (Result == true) {
                  const newUser = new userModel({
                      UserId: user.id,
                      wins: 1,
                      draws: 0,
                      loses: 0,
                      money: 0,
                      inventory: []
                  })
                  return newUser.save()
              }else{
                  const newUser = new userModel({
                      UserId: user.id,
                      wins: 0,
                      draws: 0,
                      loses: 1,
                      money: 0,
                      inventory: []
                  })
                  return newUser.save()
              }
          }else{
              if (Current + 1 == number) {
                  user.loses = user.loses+1
                  user.save()
              }
              else {
                  user.wins = user.wins+1
                  user.save()
              }
          }
      })
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
