const nodemailer = require("nodemailer");

// Function to send a confirmation email
const sendConfirmationEmail = async (email, confirmationToken, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER || "wyatt@joinlifelist.com",
      pass: process.env.NODEMAILER_PASS || "txpe jtwb oczl zfxf",
    },
  });

  const confirmationLink = `http://yourfrontendapp.com/verify-email/${confirmationToken}`;

  const mailOptions = {
    from: "contact@joinlifelist.com",
    to: email,
    subject: "Early Access Confirmation",
    html: `<p>${message}</p><p>Click the following link to confirm your early access information: <a href="${confirmationLink}">Confirm Early Access</a></p>`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendConfirmationEmail };
