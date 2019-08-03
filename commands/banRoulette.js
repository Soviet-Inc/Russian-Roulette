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
class banRoulette {
    constructor() {
        this._command = "banRoulette";
    }
    help() {
        return "Play ban roulette!";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!msgObject.member.hasPermission("BAN_MEMBERS")) {
                msgObject.channel.send("You need ban permissions to run this!");
                return;
            }
            let mentioned = msgObject.mentions.members.array();
            if (mentioned.length == 0) {
                msgObject.channel.send("Please mention at least 1 person!");
                return;
            }
            msgObject.channel.send("Calculating results!");
            let number = Math.floor(Math.random() * (6 - 1) + 1);
            let results = [];
            let loser = null;
            function Play(Current) {
                const member = mentioned[Current];
                if (Current + 1 == number) {
                    results.push(`${member.user.username}'s gun: *ban*`);
                    loser = member;
                }
                else {
                    results.push(`${member.user.username}'s gun: *Click*`);
                }
            }
            for (let Current = 0; Current < mentioned.length; Current++) {
                Play(Current);
            }
            setTimeout(() => {
                if (loser == null) {
                    results.push("Nobody got banned, good I think.");
                }
                else {
                    results.push(`${loser} is getting kicked, good I think.`);
                    if (loser.kickable) {
                        loser.kick("Lost in banned roulette!");
                    }
                    else {
                        msgObject.channel.send(`Huh I can't ban them.`);
                    }
                }
            }, 500 * mentioned.length);
            let embed = new Discord.RichEmbed()
                .setTitle("Results")
                .setDescription(results.map((x) => x));
            msgObject.channel.send(embed);
        });
    }
}
exports.default = banRoulette;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuUm91bGV0dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvYmFuUm91bGV0dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQU90QyxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxhQUFhLENBQUE7SUE4RDdDLENBQUM7SUE1REcsSUFBSTtRQUNBLE9BQU8sb0JBQW9CLENBQUM7SUFDaEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsSUFBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFDO2dCQUM5QyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFBO2dCQUMvRCxPQUFNO2FBQ1Q7WUFDRCxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNsRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO2dCQUN0QixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO2dCQUMzRCxPQUFNO2FBQ1Q7WUFFRCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1lBRTlDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ3BELElBQUksT0FBTyxHQUFRLEVBQUUsQ0FBQTtZQUVyQixJQUFJLEtBQUssR0FBTyxJQUFJLENBQUE7WUFFcEIsU0FBUyxJQUFJLENBQUMsT0FBYztnQkFDeEIsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLE9BQU8sR0FBQyxDQUFDLElBQUksTUFBTSxFQUFDO29CQUNwQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLGVBQWUsQ0FBQyxDQUFBO29CQUNwRCxLQUFLLEdBQUcsTUFBTSxDQUFBO2lCQUNqQjtxQkFBSTtvQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLGlCQUFpQixDQUFDLENBQUE7aUJBQ3pEO1lBQ0wsQ0FBQztZQUVELEtBQUssSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO2dCQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDaEI7WUFFRCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNaLElBQUksS0FBSyxJQUFJLElBQUksRUFBQztvQkFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUE7aUJBQ25EO3FCQUFJO29CQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLG1DQUFtQyxDQUFDLENBQUE7b0JBQ3pELElBQUcsS0FBSyxDQUFDLFFBQVEsRUFBQzt3QkFDZCxLQUFLLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUE7cUJBQ3pDO3lCQUFJO3dCQUNELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUE7cUJBQ2xEO2lCQUNKO1lBQ0wsQ0FBQyxFQUFFLEdBQUcsR0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7WUFFeEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUNsQyxRQUFRLENBQUMsU0FBUyxDQUFDO2lCQUNuQixjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUMxQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUVqQyxDQUFDO0tBQUE7Q0FDSjtBQWhFRCw4QkFnRUMifQ==