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

class info {
    constructor() {
        this._command = "info";
    }
    help() {
        return "Info!";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let Embed = new Discord.RichEmbed()
            .setTitle("--Russian Roulette Info--")
            .addField("Github","https://github.com/MraClean/Russian-Roulette")
            .addField("Servers/Users",`Guilds: ${client.guilds.size} | Users: ${client.users.size}`)
            .addField("Library","Discord.js")
            .setFooter("Created by Russian Roulette W/ 6 Bullets#1922")
        });
    }
}
exports.default = info;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFPdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBbUJ0QyxDQUFDO0lBakJHLElBQUk7UUFDQSxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ2xDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQ2hCLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDakMsUUFBUSxDQUFDLGtCQUFrQixFQUFDLHdEQUF3RCxDQUFDO2lCQUNyRixRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDcEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakMsQ0FBQztLQUFBO0NBQ0o7QUFyQkQsdUJBcUJDIn0=