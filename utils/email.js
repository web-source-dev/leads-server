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

