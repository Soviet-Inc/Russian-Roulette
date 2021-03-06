const Discord = require("discord.js");
const dblapi = require("dblapi.js");
const mongoose = require("mongoose");
const http = require("http");

const ConfigFile = require("./config");

let userModel = require("./models/user");
let configModel = require("./models/guild");

const server = http.createServer().listen(process.env.PORT || 5000);

const client = new Discord.Client();
const dbl = new dblapi(process.env.dblToken, {
  webhookAuth: process.env.authentication,
  webhookPath: "/vote",
  webhookServer: server
});

dbl.webhook.on("ready", hook => {
  console.log(
    `Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`
  );
});

dbl.webhook.on("vote", vote => {
  client
    .fetchWebhook(
      "608819294876336149",
      "kQbR4QuXe_XCkTe61mwtfmU2PGfJOtgWqvWQFjA1iGwD6BobXcGcObmSdfRmYi1EMUbU"
    )
    .then(hook => {
      client.fetchUser(vote.user).then(User => {
        hook
          .sendMessage(`${User.username} just voted! Loading Vote`)
          .then(message => {
            userModel.findOne(
              {
                UserId: User.id
              },
              (err, user) => {
                if (err) {
                  console.error(err);
                }
                if (!user) {
                  const newUser = new userModel({
                    UserId: User.id,
                    wins: 0,
                    draws: 0,
                    loses: 0,
                    money: 0,
                    inventory: [`Mine Bribe`]
                  });
                  console.log("Saved Data");
                  message.edit(
                    `${User.username} just voted! They get a mine bribe`
                  );
                  return newUser.save();
                } else {
                  user.inventory.push(`Mine Bribe`);
                  user.save();
                  console.log("Saved Data");
                  message.edit(
                    `${User.username} just voted! They get a mine bribe`
                  );
                }
              }
            );
          });
      });
    });
});

client.login(ConfigFile.config.token);
