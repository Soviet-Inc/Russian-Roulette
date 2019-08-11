"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = __importStar(require("discord.js"));

let userModel = require("../models/user")
let configModel = require("../models/guild")

class prefix {
    constructor() {
        this._command = "prefix";
        this._alist = "prefox";
    }
    help() {
        return "Changed the guilds prefix";
    }
    alist() {
        return this._alist
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        if(!msgObject.member.hasPermission("MANAGE_GUILD")){
            msgObject.channel.send("You don't have permissions to do this!")
            return
        } 
        if(!args[0]){
            msgObject.channel.send("Please state a prefix!")
            return
        }
        if(args[0].length > 3){
            msgObject.channel.send("Max length is 3!")
            return
        }
        configModel.findOne({
            guildId:msgObject.guild.id
        }, (err,guild) => {
            if (err){console.error(err)}
            if(!guild) {
                const newGuild = new configModel({
                    guildId: id,
                    prefix: args[0]
                })
                return newGuild.save()
            }else{
                // Guild Exists
                guild.prefix = args[0]
                guild.save()
            }
        })
        msgObject.react(`✅`)
    }
}
exports.default = prefix;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Fybi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy93YXJuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG9EQUFzQztBQUd0QyxNQUFxQixJQUFJO0lBQXpCO1FBRXFCLGFBQVEsR0FBRyxNQUFNLENBQUE7SUF1Q3RDLENBQUM7SUFyQ0csSUFBSTtRQUNBLE9BQU8sMEJBQTBCLENBQUM7SUFDdEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUV6RSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyRCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEQsSUFBSSxHQUFHLEdBQUcsR0FBRyxhQUFhLEVBQUUsQ0FBQztRQUU3QixTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO1lBQ2xELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLCtDQUErQyxDQUFDLENBQUE7WUFDdkUsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBQztZQUNmLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7WUFDekMsT0FBTztTQUNWO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2FBQ2xDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQzthQUNoQyxjQUFjLENBQUMsc0JBQXNCLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDNUQsUUFBUSxDQUFDLFFBQVEsRUFBQywyQkFBMkIsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUNwRCxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUE7UUFDdkQsSUFBSSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2FBQ25DLFFBQVEsQ0FBQyxhQUFhLENBQUM7YUFDdkIsY0FBYyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsa0JBQWtCLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsWUFBWSxhQUFhLEVBQUUsQ0FBQyxDQUFBO1FBQ2xKLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBd0IsQ0FBQTtRQUNuSCxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3pCLENBQUM7Q0FDSjtBQXpDRCx1QkF5Q0MifQ==