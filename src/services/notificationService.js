// notificationService.js

const axios = require('axios');

const sendNotification = async (message) => {
  try {
    const response = await axios.post('https://discord.com/api/webhooks/1234567890', { content: message });
    console.log('Notification sent successfully');
    return response.data;
  } catch (error) {
    console.error('Error sending notification:', error.message);
    throw new Error('Failed to send notification');
  }
};

module.exports = {
  sendNotification,
};