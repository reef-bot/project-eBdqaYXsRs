// config.js

const config = {
  discordToken: 'YOUR_DISCORD_TOKEN_HERE',
  moderation: {
    filterWords: ['word1', 'word2', 'word3'],
    maxWarnings: 3,
    warnMessage: 'Please follow the server rules to avoid further action.'
  },
  notification: {
    webhookUrl: 'YOUR_WEBHOOK_URL_HERE'
  }
};

module.exports = config;