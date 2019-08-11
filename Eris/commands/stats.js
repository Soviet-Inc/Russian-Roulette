const eris = require("eris");
const quickDb = require("quick.db");

const config = require("../config").config;
const client = require("../index");
const { isNull } = require("util");

const guildModel = require("../models/guild")
const userModel = require("../models/user")

let command = {
  description: {
    Name: "stats",
    Information: {
      description: "Check your stats",
      fullDescription: "Check your stats ex: Wins",
      usage: "<optional-mention>",
      type: "economics"
    }
  },
  Alias: "profile",
  RunCommand(args, msgObject) {
    let id = msgObject.member.user.id
    let username = msgObject.member.user.username
    if(msgObject.mentions.length == 1){
        id = msgObject.mentions[0].id
        username = msgObject.mentions[0].username
    }

    userModel.findOne(
      {
        UserId: id
      },
      (err, user) => {
        if (err) {
          console.error(err);
        }
        if (!user) {
          const newUser = new userModel({
            UserId: id,
            wins: 0,
            draws: 0,
            loses: 0,
            money: 0,
            inventory: []
          });
          let BlankStats = [
            "\n Wins: 0",
            "\n Draws: 0",
            "\n Loses: 0",
            "\n Money: 0",
            "\n Inventory: \n Nothing"
          ];
          msgObject.channel.createMessage({
            embed: {
              title: `${username}'s Stats`,
              description: `${BlankStats}`,
              color: 0xf45b4d
            }
          });
          return newUser.save();
        } else {
          // Stats Exist, Gotta Pull Up
          let Inventory = user.inventory;
          let Mapped = Inventory.map(x => x.name);
          let Stats = [
            `\n Wins: ${user.wins}`,
            `\n Draws: ${user.draws}`,
            `\n Loses: ${user.loses}`,
            `\n Money: ${user.money}`,
            `\n --Inventory--`,
            `\n ${Mapped}`
          ];
          msgObject.channel.createMessage({
            embed: {
              title: `${username}'s Stats`,
              description: `${Stats}`,
              color: 0xf45b4d
            }
          });
        }
      }
    );
  }
};

module.exports = command;
