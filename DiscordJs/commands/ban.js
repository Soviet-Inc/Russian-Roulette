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
        this._command = "ban";
        this._alist = "bon";
    }
    help() {
        return "Bans the mentioned user";
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
        let mentionedUser = msgObject.mentions.users.first();
        let suppiedReason = args.slice(1).join(" ") || "";
        let log = `${msgObject.author.username}: ${suppiedReason}`;
        msgObject.delete(0);
        if (!msgObject.member.hasPermission("BAN_MEMBERS")) {
            msgObject.channel.send(`You do not have ban permissions!`);
            return;
        }
        if (!mentionedUser) {
            msgObject.channel.send("User Not Found!");
            return;
        }
        if (!msgObject.guild.member(mentionedUser).bannable) {
            msgObject.channel.send(`I don't have permissions to kick that user!`);
            return;
        }
        msgObject.guild.member(mentionedUser).ban(log);
        msgObject.channel.send(`**That user has been banned**`);
    }
}
exports.default = ban;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2Jhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxvREFBc0M7QUFHdEMsTUFBcUIsR0FBRztJQUF4QjtRQUVxQixhQUFRLEdBQUcsS0FBSyxDQUFBO0lBeUNyQyxDQUFDO0lBdkNHLElBQUk7UUFDQSxPQUFPLHlCQUF5QixDQUFDO0lBQ3JDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFFekUsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xELElBQUksR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssYUFBYSxFQUFFLENBQUM7UUFFM0QsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUM7WUFDL0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FBQTtZQUMxRCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsYUFBYSxFQUFDO1lBQ2YsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtZQUN6QyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ2pELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxDQUFDLENBQUE7WUFDckUsT0FBTztTQUNWO1FBQ0QsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzlDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUE7UUFDdkQsSUFBSSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2FBQ25DLFFBQVEsQ0FBQyxhQUFhLENBQUM7YUFDdkIsY0FBYyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsa0JBQWtCLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsWUFBWSxhQUFhLEVBQUUsQ0FBQyxDQUFBO1FBQ2xKLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBd0IsQ0FBQTtRQUNuSCxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUV6QixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3pCLENBQUM7Q0FDSjtBQTNDRCxzQkEyQ0MifQ==