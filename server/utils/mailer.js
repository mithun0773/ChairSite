const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // e.g. smtp.gmail.com
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendVerificationEmail(to, jwtToken) {
  const url = `${process.env.FRONTEND_URL}/verify/${jwtToken}`;
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject: "Verify your account",
    html: `Click <a href="${url}" target="_blank">here</a> to verify your email.`,
  });
}

module.exports = { sendVerificationEmail };
