const mongoose = require("mongoose")

const config = new mongoose.Schema({
    guildId: String,
    prefix: {type:String, default:"rr!"},
    disabledCommands:Array
})

module.exports = mongoose.model("config",config)