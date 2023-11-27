// Import Models
const { generateUniqueToken } = require("./generateUniqueToken");
const { sendConfirmationEmail } = require("./mailer");

// Export Models
module.exports = { generateUniqueToken, sendConfirmationEmail };
