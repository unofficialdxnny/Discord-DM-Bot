const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('message', message => {
    if (message.content === '!announce') { // Change !announce to the command you want to use
        message.guild.members.cache.forEach(member => { // Iterate through all the members in the server
            member.send('Hello, this is an announcement!'); // Send a message to each member
        });
    }
});

client.login('YOUR_BOT_TOKEN'); // Replace with your bot token
