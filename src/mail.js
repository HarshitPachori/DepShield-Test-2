const nodemailer = require('nodemailer');
const nodeMailer = require('node-mailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: { user: 'user@gmail.com', pass: 'password' }
});

const sendEmail = (to, subject, body, callback) => {
  transporter.sendMail({ from: 'app@gmail.com', to, subject, text: body }, callback);
};

const sendLegacy = (options) => {
  nodeMailer.send(options);
};

module.exports = { sendEmail, sendLegacy };