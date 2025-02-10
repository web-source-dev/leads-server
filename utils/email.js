const axios = require('axios');
require('dotenv').config(); // Load environment variables
const sendEmail = async (to, subject, html) => {
  const data = {
    sender: { email: process.env.SENDINBLUE_EMAIL },
    to: [{ email: to }],
    subject: subject,
    htmlContent: html,
  };

  try {
    const response = await axios.post('https://api.sendinblue.com/v3/smtp/email', data, {
      headers: {
        'api-key': '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',
        'Content-Type': 'application/json',
      },
    });
    console.log('response',response);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

module.exports = sendEmail;

