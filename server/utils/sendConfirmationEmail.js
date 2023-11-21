const nodemailer = require("nodemailer");

function sendConfirmationEmail(email, confirmationToken) {
  const transporter = nodemailer.createTransport({
    // Configure your email service here
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const confirmationLink = `http://yourwebsite.com/verify/${confirmationToken}`;

  const mailOptions = {
    from: "info@joinlifelist.com",
    to: email,
    subject: "Confirm Your Email",
    text: `Click the following link to confirm your email and reserve your username: ${confirmationLink}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      // Handle the error appropriately, e.g., log it or inform the user
    } else {
      console.log("Email sent:", info.response);
      // You might want to log the success or take other actions
    }
  });
}

module.exports = { sendConfirmationEmail };
