const Discord = require('discord.js');
const configcontent = require("./config.json")

const client = new Discord.Client();

client.on("ready", () => {
    console.log("Imma ready");
    let user = client.users.cache.get("502146791597277194");
    user.send("Imma ready bro")
});

client.on("message", message => {
    const args = message.content.trim().split(' ');
    if (client.user.id != message.author.id) {
        for (let i = 0; i < args.length; i++) {
            if (configcontent.niggalist.includes(args[i])) {
                let channel = client.channels.cache.get(configcontent.channel_id);
                channel.send("User " + message.author.tag + " has used bad word\nLink is here: https://discord.com/channels/" + message.guild.id + "/" + message.channel.id + "/" + message.id);
                return;
            }
        }
    }
});

client.login(configcontent.token);