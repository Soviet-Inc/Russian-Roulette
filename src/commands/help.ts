import * as Discord from "discord.js";

import { cooldowns } from "../api"
import {IBotCommand} from "../api";
import { stringify } from "querystring";
import { isNull } from "util";

export default class help implements IBotCommand{

    private readonly _command = "help"

    help(): string {
        return "Help!";
    }    

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        // Runs the command
        let embed = new Discord.RichEmbed()
        .setTitle(`Help`)
        .setDescription(`The prefix is /`)
        .addField(`Russian Roulette`,`roulette , kickRoulette , banRoulette`)
        .setColor(`#ff6c5e`)
        msgObject.channel.send(embed)
    }
}