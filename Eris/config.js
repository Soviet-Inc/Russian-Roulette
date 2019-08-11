require("dotenv").config()
exports.config = {
    "token": process.env.token,
    "mongodb": process.env.mongodb,
    "discordBots": process.env.dblToken,
    "authentication": process.env.authentication,
    "defaultPrefix": "rr!",
    "commands": [
        "roulette",
        "stats",
        "help",
        "banroulette",
        "kickroulette",
        "info",
        "ping",
        "kick",
        "ban",
        "purge"
    ]
};