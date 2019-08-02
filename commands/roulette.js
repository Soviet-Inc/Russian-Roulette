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
class roulette {
    constructor() {
        this._command = "roulette";
    }
    help() {
        return "Play russian roulette!";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
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
                    msgObject.channel.send(`${member.user.username}'s gun: **BANG**`);
                    loser = member.user.username;
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
                    msgObject.channel.send("Nobody died, good I think.");
                }
                else {
                    msgObject.channel.send(`${loser} died, good I think.`);
                }
            }, 500 * mentioned.length);
        });
    }
}
exports.default = roulette;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bGV0dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcm91bGV0dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE1BQXFCLFFBQVE7SUFBN0I7UUFFcUIsYUFBUSxHQUFHLFVBQVUsQ0FBQTtJQTZDMUMsQ0FBQztJQTNDRyxJQUFJO1FBQ0EsT0FBTyx3QkFBd0IsQ0FBQztJQUNwQyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNsRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO2dCQUN0QixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO2dCQUMzRCxPQUFNO2FBQ1Q7WUFFRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUVwRCxJQUFJLEtBQUssR0FBTyxJQUFJLENBQUE7WUFFcEIsU0FBUyxJQUFJLENBQUMsT0FBYztnQkFDeEIsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLE9BQU8sR0FBQyxDQUFDLElBQUksTUFBTSxFQUFDO29CQUNwQixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxrQkFBa0IsQ0FBQyxDQUFBO29CQUNqRSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7aUJBQy9CO3FCQUFJO29CQUNELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLGlCQUFpQixDQUFDLENBQUE7aUJBQ25FO1lBQ0wsQ0FBQztZQUVELEtBQUssSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO2dCQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDZjtZQUVELFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxLQUFLLElBQUksSUFBSSxFQUFDO29CQUNkLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUE7aUJBQ3ZEO3FCQUFJO29CQUNELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxzQkFBc0IsQ0FBQyxDQUFBO2lCQUN6RDtZQUNMLENBQUMsRUFBRSxHQUFHLEdBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRTVCLENBQUM7S0FBQTtDQUNKO0FBL0NELDJCQStDQyJ9