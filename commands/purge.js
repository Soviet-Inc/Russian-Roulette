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
class ban {
    constructor() {
        this._command = "purge";
        this._alist = "splurge";
    }
    help() {
        return "Purges the messages with the amount given";
    }
    alist() {
        return this._alist
    }
    isThisCommand(command) {
        if(command === this._alist){return true}else{
            if(command === this._command){return true}
        }
    }
    runCommand(args, msgObject, client) {
        msgObject.delete(0);
        if (!msgObject.member.hasPermission("MANAGE_MESSAGES")) {
            msgObject.channel.send(`You do not have manage messages permission!`);
            return;
        }
        if (!args[0]) {
            msgObject.channel.send(`No arguments given!`);
            return;
        }
        let amount = Number(args[0]);
        if (isNaN(amount)) {
            msgObject.channel.send(`No valid number given!`);
            return;
        }
        amount = Math.round(amount);
        msgObject.channel.bulkDelete(amount);
    }
}
exports.default = ban;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcHVyZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsb0RBQXNDO0FBSXRDLE1BQXFCLEdBQUc7SUFBeEI7UUFFcUIsYUFBUSxHQUFHLE9BQU8sQ0FBQTtJQXNDdkMsQ0FBQztJQXBDRyxJQUFJO1FBQ0EsT0FBTywyQ0FBMkMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBRXpFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEVBQUM7WUFDbkQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkNBQTZDLENBQUMsQ0FBQTtZQUNyRSxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDO1lBQ1QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQTtZQUM3QyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFNUIsSUFBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQ2hCO1lBQ0EsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtZQUNoRCxPQUFPO1NBQ047UUFDRCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNwQyxJQUFJLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7YUFDbkMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO2FBQzNCLGNBQWMsQ0FBQyxHQUFHLE1BQU0sMkJBQTJCLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7UUFDckYsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUF3QixDQUFBO1FBQ25ILGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3pCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNKO0FBeENELHNCQXdDQyJ9