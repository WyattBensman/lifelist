const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: trim,
    maxlength: 30,
    match: /^[a-zA-Z0-9.]+$/,
  },
  // Fields for email confirmation
  isVerified: {
    type: Boolean,
    default: false,
  },
  confirmationToken: {
    type: String,
  },
});

const User = model("User", userSchema);

module.exports = User;
