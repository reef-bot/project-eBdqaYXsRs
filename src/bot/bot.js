// bot.js

const { Client, Intents } = require('discord.js');
const { moderationCommands, filteringCommands, activityCommands } = require('./commands/moderation');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
  console.log('Bot is ready');
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  // Check for moderation commands
  if (message.content.startsWith('!moderation')) {
    moderationCommands(message);
  }

  // Check for filtering commands
  if (message.content.startsWith('!filtering')) {
    filteringCommands(message);
  }

  // Check for activity commands
  if (message.content.startsWith('!activity')) {
    activityCommands(message);
  }
});

client.login('your-bot-token');

module.exports = client;