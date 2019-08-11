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
const ConfigFile = require("../config");

let userModel = require("../models/user")
let configModel = require("../models/guild")

class help {
    constructor() {
        this._command = "help";
        this._alist = "halp";
    }
    help() {
        return "Help!";
    }
    alist() {
        return this._alist
    }
    isThisCommand(command) {
        if(command === this._alist){return true}else{
            if(command === this._command){return true}
        }
    }
    runCommand(args, msgObject, client, commands) {
        return __awaiter(this, void 0, void 0, function* () {
            if(args[0]) {
                let command = String(args[0]).toLowerCase()
                for (const commandsClass of commands) {
                    try {
                        if (!commandsClass.isThisCommand(command)) {
                            continue;
                        }
                        let helpText = commandsClass.help();
                        let alist = commandsClass.alist();
                        let embed = new Discord.RichEmbed()
                        .setTitle(`Help for ${command}`)
                        .addField(`Help Text (Not helpful, most of the time)`, `${helpText}`)
                        .addField(`Alist`, `${alist}`)
                        .setColor(`#ff6c5e`);
                        return msgObject.channel.send(embed)
                    }
                    catch (exception) {
                        console.log(exception);
                    }
                }
            }
            configModel.findOne({
                guildId:msgObject.guild.id
            }, (err,guild) => {
                if (err){console.error(err)}
                let embed = new Discord.RichEmbed()
                .setTitle(`Help`)
                .setDescription(`The prefix is ${guild.prefix || "/"} | Total commands: ${ConfigFile.config.commands.length-1}`)
                .addField(`Roulettes`, `roulette , kickRoulette , banRoulette, russianRoulette`)
                .addField(`Moderation`, `kick , ban , warn , purge`)
                .addField(`Economy`,`stats`)
                .addField(`Fun`, `animeme`)
                .addField(`Misc`, `info , whois , guildinfo , help , disabled`)
                .addField(`Configuration`,`prefix`)
                .setColor(`#ff6c5e`);
            msgObject.channel.send(embed);
            })
        });
    }
}
exports.default = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFPdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBbUJ0QyxDQUFDO0lBakJHLElBQUk7UUFDQSxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ2xDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQ2hCLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDakMsUUFBUSxDQUFDLGtCQUFrQixFQUFDLHdEQUF3RCxDQUFDO2lCQUNyRixRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDcEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakMsQ0FBQztLQUFBO0NBQ0o7QUFyQkQsdUJBcUJDIn0=