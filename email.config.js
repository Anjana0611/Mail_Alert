const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'tvsmotor',
  auth: {
    user: 'Anjana.MR@tvsmotor.com',
    pass: 'sherlock@0724',
  },
});

const email_alert = (subject, message) => {
  const mailOptions = {

    from: 'Anjana.MR@tvsmotor.com',
    to: 'j.jerin@tvsmotor.com',
    subject: 'file changed',
    text: 'New file added',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(`Error sending email: ${error}`);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

module.exports = email_alert;
