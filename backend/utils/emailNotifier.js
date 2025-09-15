const nodemailer = require("nodemailer");
const config = require("../config");

const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: config.emailUser,
    pass: config.emailPass,
  },
});

const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: `"Nourish-Net" <${config.emailUser}>`,
      to,
      subject,
      text,
    });
    console.log(` Email sent to ${to}`);
  } catch (err) {
    console.error("Email error:", err);
  }
};

module.exports = sendEmail;
