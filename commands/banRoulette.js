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
            let number = Math.floor(Math.random() * (6 - 1) + 1);
            let loser = null;
            function Play(Current) {
                const member = mentioned[Current];
                if (Current + 1 == number) {
                    msgObject.channel.send(`${member.user.username}'s gun: *Ban*`);
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
                    msgObject.channel.send("Nobody got ban, good I think.");
                }
                else {
                    msgObject.channel.send(`${loser} is getting banned, good I think.`);
                    if (loser.bannable) {
                        loser.ban("Lost in ban roulette!");
                    }
                    else {
                        msgObject.channel.send(`Huh I can't ban them.`);
                    }
                }
            }, 500 * mentioned.length);
        });
    }
}
exports.default = banRoulette;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuUm91bGV0dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvYmFuUm91bGV0dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE1BQXFCLFdBQVc7SUFBaEM7UUFFcUIsYUFBUSxHQUFHLGFBQWEsQ0FBQTtJQXNEN0MsQ0FBQztJQXBERyxJQUFJO1FBQ0EsT0FBTyxvQkFBb0IsQ0FBQztJQUNoQyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUM7Z0JBQzlDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUE7Z0JBQy9ELE9BQU07YUFDVDtZQUNELElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ2xELElBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7Z0JBQ3RCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUE7Z0JBQzNELE9BQU07YUFDVDtZQUVELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBRXBELElBQUksS0FBSyxHQUFPLElBQUksQ0FBQTtZQUVwQixTQUFTLElBQUksQ0FBQyxPQUFjO2dCQUN4QixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksT0FBTyxHQUFDLENBQUMsSUFBSSxNQUFNLEVBQUM7b0JBQ3BCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLGVBQWUsQ0FBQyxDQUFBO29CQUM5RCxLQUFLLEdBQUcsTUFBTSxDQUFBO2lCQUNqQjtxQkFBSTtvQkFDRCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxpQkFBaUIsQ0FBQyxDQUFBO2lCQUNuRTtZQUNMLENBQUM7WUFFRCxLQUFLLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtnQkFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBQ2hCO1lBRUQsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDWixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUM7b0JBQ2QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FBQTtpQkFDN0Q7cUJBQUk7b0JBQ0QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLG1DQUFtQyxDQUFDLENBQUE7b0JBQ25FLElBQUcsS0FBSyxDQUFDLFFBQVEsRUFBQzt3QkFDZCxLQUFLLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7cUJBQ3RDO3lCQUFJO3dCQUNELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUE7cUJBQ2xEO2lCQUNKO1lBQ0wsQ0FBQyxFQUFFLEdBQUcsR0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFNUIsQ0FBQztLQUFBO0NBQ0o7QUF4REQsOEJBd0RDIn0=