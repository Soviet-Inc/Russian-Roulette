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
class kick {
    constructor() {
        this._command = "kick";
        this._alist = "kock";
    }
    help() {
        return "Kicks the mentioned user";
    }
    alist() {
        return this._alist
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        let mentionedUser = msgObject.mentions.users.first();
        let suppiedReason = args.slice(1).join(" ") || "";
        let log = `${msgObject.author.username}: ${suppiedReason}`;
        msgObject.delete(0);
        if (!msgObject.member.hasPermission("KICK_MEMBERS")) {
            msgObject.channel.send(`<You do not have kick permissions!`);
            return;
        }
        if (!mentionedUser) {
            msgObject.channel.send("User Not Found!");
            return;
        }
        if (!msgObject.guild.member(mentionedUser).kickable) {
            msgObject.channel.send(`I don't have permissions to kick that user!`);
            return;
        }
        msgObject.guild.member(mentionedUser).kick(log);
        msgObject.channel.send(`**That user has been kicked**`);
    }
}
exports.default = kick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9raWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG9EQUFzQztBQUd0QyxNQUFxQixJQUFJO0lBQXpCO1FBRXFCLGFBQVEsR0FBRyxNQUFNLENBQUE7SUEwQ3RDLENBQUM7SUF4Q0csSUFBSTtRQUNBLE9BQU8sMEJBQTBCLENBQUM7SUFDdEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUV6RSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyRCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEQsSUFBSSxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxhQUFhLEVBQUUsQ0FBQztRQUUzRCxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBQztZQUNoRCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFBO1lBQzVELE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxhQUFhLEVBQUM7WUFDZixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1lBQ3pDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDakQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkNBQTZDLENBQUMsQ0FBQTtZQUNyRSxPQUFPO1NBQ1Y7UUFDRCxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQTtRQUV2RCxJQUFJLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7YUFDbkMsUUFBUSxDQUFDLGFBQWEsQ0FBQzthQUN2QixjQUFjLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxrQkFBa0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxZQUFZLGFBQWEsRUFBRSxDQUFDLENBQUE7UUFDbEosSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUF3QixDQUFBO1FBQ25ILGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBRXpCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDekIsQ0FBQztDQUNKO0FBNUNELHVCQTRDQyJ9