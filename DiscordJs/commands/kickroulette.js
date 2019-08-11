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
class kickroulette {
    constructor() {
        this._command = "kickroulette";
        this._alist = "kr";
    }
    help() {
        return "Play kick roulette!";
    }
    alist() {
        return this._alist
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!msgObject.member.hasPermission("KICK_MEMBERS")) {
                msgObject.channel.send("You need kick permissions to run this!");
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
                    results.push(`${member.user.username}'s gun: *Kick*`);
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
                    results.push("Nobody got kicked, good I think.");
                }
                else {
                    results.push(`${loser} is getting kicked, good I think.`);
                    if (loser.kickable) {
                        loser.kick("Lost in kick roulette!");
                    }
                    else {
                        msgObject.channel.send(`Huh I can't kick them.`);
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
exports.default = kickroulette;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2lja1JvdWxldHRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2tpY2tSb3VsZXR0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBT3RDLE1BQXFCLFlBQVk7SUFBakM7UUFFcUIsYUFBUSxHQUFHLGNBQWMsQ0FBQTtJQThEOUMsQ0FBQztJQTVERyxJQUFJO1FBQ0EsT0FBTyxxQkFBcUIsQ0FBQztJQUNqQyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUM7Z0JBQy9DLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLENBQUE7Z0JBQ2hFLE9BQU07YUFDVDtZQUNELElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ2xELElBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7Z0JBQ3RCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUE7Z0JBQzNELE9BQU07YUFDVDtZQUVELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUE7WUFFOUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDcEQsSUFBSSxPQUFPLEdBQVEsRUFBRSxDQUFBO1lBRXJCLElBQUksS0FBSyxHQUFPLElBQUksQ0FBQTtZQUVwQixTQUFTLElBQUksQ0FBQyxPQUFjO2dCQUN4QixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksT0FBTyxHQUFDLENBQUMsSUFBSSxNQUFNLEVBQUM7b0JBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsZ0JBQWdCLENBQUMsQ0FBQTtvQkFDckQsS0FBSyxHQUFHLE1BQU0sQ0FBQTtpQkFDakI7cUJBQUk7b0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxpQkFBaUIsQ0FBQyxDQUFBO2lCQUN6RDtZQUNMLENBQUM7WUFFRCxLQUFLLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtnQkFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBQ2hCO1lBRUQsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDWixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUM7b0JBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO2lCQUNuRDtxQkFBSTtvQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxtQ0FBbUMsQ0FBQyxDQUFBO29CQUN6RCxJQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUM7d0JBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO3FCQUN2Qzt5QkFBSTt3QkFDRCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO3FCQUNuRDtpQkFDSjtZQUNMLENBQUMsRUFBRSxHQUFHLEdBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBRXhCLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDbEMsUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDbkIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDMUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFakMsQ0FBQztLQUFBO0NBQ0o7QUFoRUQsK0JBZ0VDIn0=