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

class roulette {
    constructor() {
        this._command = "roulette";
        this._alist = "play";
    }
    help() {
        return "Play russian roulette!";
    }
    alist() {
        return this._alist
    }
    isThisCommand(command) {
        return command === this._command;
    }
    alist(){
        return "r" 
     }
    async runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let mentioned = msgObject.mentions.members.array();
            let results = [];
            let Bullets = args[0]
            if(isNaN(Number(Bullets))){
                Bullets = 1
            }
            if(Number(Bullets) > 6) {
                msgObject.channel.send("Maximum amount of bullets is 6!")
                return
            }
            if (mentioned.length == 0) {
                msgObject.channel.send("Please mention at least 1 person!");
                return;
            }
            msgObject.channel.send("Calculating results!");
            Bullets = 7-Bullets
            let number = Math.floor(Math.random() * (Bullets - 1) + 1);
            let loser = null;

            function Play(Current) {
                const member = mentioned[Current];
                if (Current + 1 == number) {
                    results.push(`${member.user.username}'s gun: **BANG**`);
                }
                else {
                    results.push(`${member.user.username}'s gun: *click*`);
                }
                userModel.findOne({
                    UserId:member.user.id
                }, (err,user) => {
                    if (err){console.error(err)}
                    if(!user) {
                        let Result

                        if (Current + 1 == number) {
                            Result = false
                            loser = member.user.username;
                        }
                        else {
                            Result = true
                        }
                        if (Result == true) {
                            const newUser = new userModel({
                                UserId: member.user.id,
                                wins: 1,
                                draws: 0,
                                loses: 0,
                                money: 0,
                                inventory: []
                            })
                            return newUser.save()
                        }else{
                            const newUser = new userModel({
                                UserId: member.user.id,
                                wins: 0,
                                draws: 0,
                                loses: 1,
                                money: 0,
                                inventory: []
                            })
                            return newUser.save()
                        }
                    }else{
                        if (Current + 1 == number) {
                            user.loses = user.loses+1
                            user.save()
                            loser = member.user.username;
                        }
                        else {
                            user.wins = user.wins+1
                            user.save()
                        }
                    }
                })
            }
            for (let Current = 0; Current < mentioned.length; Current++) {
                Play(Current);
            }
            let embed = new Discord.RichEmbed()
                .setTitle("Results")
                .setDescription(results.map((x) => x));
            msgObject.channel.send(embed);
        });
    }
}
exports.default = roulette;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bGV0dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcm91bGV0dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQU90QyxNQUFxQixRQUFRO0lBQTdCO1FBRXFCLGFBQVEsR0FBRyxVQUFVLENBQUE7SUFxRDFDLENBQUM7SUFuREcsSUFBSTtRQUNBLE9BQU8sd0JBQXdCLENBQUM7SUFDcEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDbEQsSUFBSSxPQUFPLEdBQVEsRUFBRSxDQUFBO1lBRXJCLElBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7Z0JBQ3RCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUE7Z0JBQzNELE9BQU07YUFDVDtZQUVELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUE7WUFFOUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFFcEQsSUFBSSxLQUFLLEdBQU8sSUFBSSxDQUFBO1lBRXBCLFNBQVMsSUFBSSxDQUFDLE9BQWM7Z0JBQ3hCLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxPQUFPLEdBQUMsQ0FBQyxJQUFJLE1BQU0sRUFBQztvQkFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxrQkFBa0IsQ0FBQyxDQUFBO29CQUN2RCxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7aUJBQy9CO3FCQUFJO29CQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsaUJBQWlCLENBQUMsQ0FBQTtpQkFDekQ7WUFDTCxDQUFDO1lBRUQsS0FBSyxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7Z0JBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUNmO1lBRUQsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDWixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUM7b0JBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO2lCQUM3QztxQkFBSTtvQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxzQkFBc0IsQ0FBQyxDQUFBO2lCQUMvQztZQUNMLENBQUMsRUFBRSxHQUFHLEdBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBRXhCLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDbEMsUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDbkIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDMUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakMsQ0FBQztLQUFBO0NBQ0o7QUF2REQsMkJBdURDIn0=