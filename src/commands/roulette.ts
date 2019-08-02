import * as Discord from "discord.js";

import { cooldowns } from "../api"
import {IBotCommand} from "../api";
import { stringify } from "querystring";
import { isNull } from "util";

export default class roulette implements IBotCommand{

    private readonly _command = "roulette"

    help(): string {
        return "Play russian roulette!";
    }    

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        // Runs the command
        let mentioned = msgObject.mentions.members.array()
        if (mentioned.length == 0){
            msgObject.channel.send("Please mention at least 1 person!")
            return
        }

        let number = Math.floor(Math.random() * (6 - 1) + 1)

        let loser:any = null

        function Play(Current:number) {
            const member = mentioned[Current];
            if (Current+1 == number){
                msgObject.channel.send(`${member.user.username}'s gun: **BANG**`)
                loser = member.user.username
            }else{
                msgObject.channel.send(`${member.user.username}'s gun: *Click*`)
            }
        } 

        for (let Current = 0; Current < mentioned.length; Current++) {
           Play(Current)
        }

        setTimeout(() => {
            if (loser == null){
                msgObject.channel.send("Nobody died, good I think.")
            }else{
                msgObject.channel.send(`${loser} died, good I think.`)
            }
        }, 500*mentioned.length)

    }
}