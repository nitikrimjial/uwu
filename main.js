const Discord = require('discord.js');
require("dotenv").config()
const TOKEN = "OTg3NjE0NDQ2OTI0OTk2NjQ4.Ge1Gq8.SWkmE3PVDqKXZkOiwDD8x-4IuXp7-MfTFm5Q9I"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})
client.on("ready", ()=>{
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message)=>{
    if (message.content=="hi"){
        message.reply("Ara Ara oni chan")
    }
    if (message.content=="how are you?"){
        message.reply("I am fine 🤝")
    }
})
client.login(process.env.TOKEN)
