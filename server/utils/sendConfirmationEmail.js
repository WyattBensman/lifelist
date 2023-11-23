const nodemailer = require("nodemailer");
const { google } = require("googleapis");

// Your OAuth2.0 credentials

// Function to send the confirmation email
const sendConfirmationEmail = async (email, confirmationToken) => {
  const oAuth2Client = new google.auth.OAuth2(
    credentials.web.client_id,
    credentials.web.client_secret,
    credentials.web.redirect_uris[0]
  );

  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: "https://www.googleapis.com/auth/gmail.send",
  });

  console.log("Authorize this app by visiting this url:", authorizeUrl);
  const code = "YOUR_AUTHORIZATION_CODE"; // Replace with the actual authorization code

  const { tokens } = await oAuth2Client.getToken(code);
  const accessToken = tokens.access_token;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "info@joinlifelist.com",
      accessToken,
    },
  });

  const confirmationLink = `http://joinlifelist.com/verify/${confirmationToken}`;

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
};

module.exports = { sendConfirmationEmail };
