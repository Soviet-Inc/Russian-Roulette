const mongoose = require("mongoose")

const config = new mongoose.Schema({
    guildId: String,
    prefix: {type:String, default:"/"}
})

module.exports = mongoose.model("config",config)