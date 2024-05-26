// index.js

// Import necessary modules
const Discord = require('discord.js');
const { config } = require('./utils/config');
const { logger } = require('./utils/logger');
const { moderationCommand } = require('./bot/commands/moderation');
const { filteringCommand } = require('./bot/commands/filtering');
const { activityCommand } = require('./bot/commands/activity');
const { moderationService } = require('./services/moderationService');
const { userService } = require('./services/userService');
const { notificationService } = require('./services/notificationService');

// Initialize Discord client
const client = new Discord.Client();

// Bot ready event
client.once('ready', () => {
  logger.info('Bot is ready');
});

// Bot message event
client.on('message', async (message) => {
  if (message.author.bot) return;

  // Check for moderation commands
  if (message.content.startsWith('!moderation')) {
    moderationCommand(message, moderationService);
  }

  // Check for filtering commands
  if (message.content.startsWith('!filtering')) {
    filteringCommand(message);
  }

  // Check for activity commands
  if (message.content.startsWith('!activity')) {
    activityCommand(message, userService);
});

// Bot login
client.login(config.botToken);