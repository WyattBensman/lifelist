const nodemailer = require("nodemailer");
const { google } = require("googleapis");

// Your OAuth2.0 credentials
const credentials = {
  web: {
    client_id:
      "743490527131-dc2cq2g37rfbra6tdob57ior8uoil528.apps.googleusercontent.com",
    project_id: "early-access-405817",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: "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",
    redirect_uris: "https://joinlifelist.com",
  },
};

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
