import * as Discord from "discord.js";
import * as db from "quick.db";

import * as ConfigFile from "./config";

import { cooldowns } from "./api"
import { IBotCommand } from "./api";
import { isNull } from "util";

const client: Discord.Client = new Discord.Client();

let commands:IBotCommand[] = [];

loadCommands(`${__dirname}/commands`)

client.on("ready", () => {
    console.log("Logged In");
   client.user.setActivity(` Russian Roulette!`)
})

client.on("message",msg =>{
    let prefix = ConfigFile.config.prefix
    if(msg.author.bot) {return;}

    if(msg.channel.type == "dm") {return;}

    if(!msg.content.startsWith(prefix)) {return}

    handleCommand(msg);
})

async function handleCommand(msg: Discord.Message){
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);

    for (const commandsClass of commands){

        try{
            if(!commandsClass.isThisCommand(command)){
                continue;
            }
            await commandsClass.runCommand(args, msg, client)
        }
        catch (exception) {
            console.log(exception)
        }
    }
}

function loadCommands(commandsPath: string) {
    if (!ConfigFile.config || (ConfigFile.config.commands as string[]).length === 0) {return;}

    for (const commandName of ConfigFile.config.commands as string[]) {

        const commandsClass = require(`${commandsPath}/${commandName}`).default;

        const command = new commandsClass() as IBotCommand;

        commands.push(command);
    }
}

client.login(ConfigFile.config.token)