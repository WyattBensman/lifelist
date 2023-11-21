const { v4: uuidv4 } = require("uuid");

function generateUniqueToken() {
  return uuidv4();
}

module.exports = { generateUniqueToken };
