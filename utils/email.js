const axios = require('axios');
require('dotenv').config(); // Use dotenv to manage environment variables

const sendEmail = (to, subject, html) => {
  const data = {
    sender: { email: process.env.SENDINBLUE_EMAIL },
    to: [{ email: to }],
    subject: subject,
    htmlContent: html,
  };

  return new Promise((resolve, reject) => {
    axios.post('https://api.sendinblue.com/v3/smtp/email', data, {
      headers: {
        'api-key': process.env.SENDINBLUE_API_KEY,
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      resolve(response.data);  // Resolve the promise with the response data on success
    })
    .catch(error => {
      reject(error);  // Reject the promise on error
    });
  });
};

module.exports = sendEmail;
