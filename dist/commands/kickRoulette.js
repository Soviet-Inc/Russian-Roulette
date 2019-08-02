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
class kickRoulette {
    constructor() {
        this._command = "kickRoulette";
    }
    help() {
        return "Play kick roulette!";
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
            let number = Math.floor(Math.random() * (6 - 1) + 1);
            let loser = null;
            function Play(Current) {
                const member = mentioned[Current];
                if (Current + 1 == number) {
                    msgObject.channel.send(`${member.user.username}'s gun: *Kick*`);
                    loser = member;
                }
                else {
                    msgObject.channel.send(`${member.user.username}'s gun: *Click*`);
                }
            }
            for (let Current = 0; Current < mentioned.length; Current++) {
                Play(Current);
            }
            setTimeout(() => {
                if (loser == null) {
                    msgObject.channel.send("Nobody got kicked, good I think.");
                }
                else {
                    msgObject.channel.send(`${loser} is getting kicked, good I think.`);
                    if (loser.kickable) {
                        loser.kick("Lost in kick roulette!");
                    }
                    else {
                        msgObject.channel.send(`Huh I can't kick them.`);
                    }
                }
            }, 500 * mentioned.length);
        });
    }
}
exports.default = kickRoulette;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2lja1JvdWxldHRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2tpY2tSb3VsZXR0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsTUFBcUIsWUFBWTtJQUFqQztRQUVxQixhQUFRLEdBQUcsY0FBYyxDQUFBO0lBc0Q5QyxDQUFDO0lBcERHLElBQUk7UUFDQSxPQUFPLHFCQUFxQixDQUFDO0lBQ2pDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBQztnQkFDL0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0NBQXdDLENBQUMsQ0FBQTtnQkFDaEUsT0FBTTthQUNUO1lBQ0QsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDbEQsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQztnQkFDdEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtnQkFDM0QsT0FBTTthQUNUO1lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFFcEQsSUFBSSxLQUFLLEdBQU8sSUFBSSxDQUFBO1lBRXBCLFNBQVMsSUFBSSxDQUFDLE9BQWM7Z0JBQ3hCLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxPQUFPLEdBQUMsQ0FBQyxJQUFJLE1BQU0sRUFBQztvQkFDcEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsZ0JBQWdCLENBQUMsQ0FBQTtvQkFDL0QsS0FBSyxHQUFHLE1BQU0sQ0FBQTtpQkFDakI7cUJBQUk7b0JBQ0QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsaUJBQWlCLENBQUMsQ0FBQTtpQkFDbkU7WUFDTCxDQUFDO1lBRUQsS0FBSyxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7Z0JBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUNoQjtZQUVELFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxLQUFLLElBQUksSUFBSSxFQUFDO29CQUNkLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUE7aUJBQzdEO3FCQUFJO29CQUNELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxtQ0FBbUMsQ0FBQyxDQUFBO29CQUNuRSxJQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUM7d0JBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO3FCQUN2Qzt5QkFBSTt3QkFDRCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO3FCQUNuRDtpQkFDSjtZQUNMLENBQUMsRUFBRSxHQUFHLEdBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRTVCLENBQUM7S0FBQTtDQUNKO0FBeERELCtCQXdEQyJ9