"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");

let userModel = require("../models/user")
let configModel = require("../models/guild")

class stats {
    constructor() {
        this._command = "stats";
        this._alist = "stots";
    }
    help() {
        return "Stats!";
    }
    alist() {
        return this._alist
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let mentioned = msgObject.mentions.members.array();
            let id = msgObject.author.id
            if (mentioned.length == 1) {
                id = mentioned[0].id
            }
            userModel.findOne({
                UserId:id
            }, (err,user) => {
                if (err){console.error(err)}
                if(!user) {
                    const newUser = new userModel({
                        UserId: id,
                        wins: 0,
                        draws: 0,
                        loses: 0,
                        money: 0,
                        inventory: []
                    })
                    let BlankStats = [
                        "Wins: 0",
                        "Draws: 0",
                        "Loses: 0",
                        "Rations: 0",
                        "Inventory: Nothing"
                    ] // Just to map
                    let Map = BlankStats.map(x => x)
                    let Stats = new Discord.RichEmbed()
                    .setTitle("Stats")
                    .setDescription(Map)
                    .setColor(`#f5b342`)
                    msgObject.channel.send(Stats)
                    return newUser.save()
                }else{
                    // Stats Exist, Gotta Pull Up
                    let Inventory = user.inventory
                    let Mapped = Inventory.map(x => x.name)
                    let Stats = [
                        `Wins: ${user.wins}`,
                        `Draws: ${user.draws}`,
                        `Loses: ${user.loses}`,
                        `Rations: ${user.money}`,
                        `--Inventory--`,
                        `${Mapped}`
                    ] // Just to map
                    let MappedStats = Stats.map(x => x)
                    let StatsEmbed = new Discord.RichEmbed()
                    .setTitle("Stats")
                    .setDescription(MappedStats)
                    .setColor(`#f5b342`)
                    msgObject.channel.send(StatsEmbed)
                }
            })
        });
    }
}
exports.default = stats;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFPdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBbUJ0QyxDQUFDO0lBakJHLElBQUk7UUFDQSxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ2xDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQ2hCLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDakMsUUFBUSxDQUFDLGtCQUFrQixFQUFDLHdEQUF3RCxDQUFDO2lCQUNyRixRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDcEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakMsQ0FBQztLQUFBO0NBQ0o7QUFyQkQsdUJBcUJDIn0=