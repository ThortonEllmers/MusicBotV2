const Discord = require('discord.js');
const config = require('../config.json');

module.exports = async (client) => {

  await client.user.setPresence({
    activities: [
      {
        name: `${config.Prefix}play`,
        type: Discord.ActivityType.Listening
      }
    ],
    status: 'online'
  });

  console.log(`${client.user.tag} is online and ready!`);

};