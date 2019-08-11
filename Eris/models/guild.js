const mongoose = require("mongoose")

const config = new mongoose.Schema({
    guildId: String,
    prefix: {type:String, default:"rre!"},
    disabledCommands:Array
})

module.exports = mongoose.model("guilds",config)