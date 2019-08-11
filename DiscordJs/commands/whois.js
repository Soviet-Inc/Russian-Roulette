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

class whois {
    constructor() {
        this._command = "whois";
        this._alist = "whotfis";
    }
    help() {
        return "Info!";
    }
    alist() {
        return this._alist
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let mentions = msgObject.mentions.members.array();
            if(mentions.length == 0) {
                return msgObject.channel.send("Please mention somebody!")
            }
            let member = mentions[0]
            let game
            let vc
            let limit
            let status = member.presence.status
            if(member.presence.game){game = member.presence.game.name}else{game = null}
            if(member.voiceChannel){vc = member.voiceChannel.name}else{vc = null}
            if(vc == null){limit = null}else{
                let Join = member.voiceChannel.userLimit 
                if(Join == -0){limit = "Infinite"}
            }
            if(status == "online"){status = "Online"}
            if(status == "offline"){status = "Offline/Invisible"}
            if(status == "idle"){status = "Idle"}
            if(status == "dnd"){status = "Do Not Disturb"}
            let embed = new Discord.RichEmbed()
            .setTitle(`${member.user.username}'s information`)
            .setThumbnail(`${member.user.avatarURL}`)
            .addField("Dates",`Joined Discord: ${member.user.createdAt} \n Joined Server: ${member.joinedAt}`,true)
            .addField("Last Message",`${member.user.lastMessage || "None!"}`,true)
            .addField("Activity", `Status: ${status} \n Game: ${game || "None"}`,true)
            .addField("Connections",`Voice Channel: ${vc || "None/Can't Find"} \n User Limit: ${limit || "None/Can't Find"}`,true)
            .addField("General",`Tag: ${member.user.tag} \n Id: ${member.user.id}`,true)
            .setColor(member.displayHexColor)
            msgObject.channel.send(embed)
        });
    }
}
exports.default = whois;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFPdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBbUJ0QyxDQUFDO0lBakJHLElBQUk7UUFDQSxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ2xDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQ2hCLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDakMsUUFBUSxDQUFDLGtCQUFrQixFQUFDLHdEQUF3RCxDQUFDO2lCQUNyRixRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDcEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakMsQ0FBQztLQUFBO0NBQ0o7QUFyQkQsdUJBcUJDIn0=