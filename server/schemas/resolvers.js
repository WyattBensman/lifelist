const { User } = require("../models");
const { generateUniqueToken, sendConfirmationEmail } = require("../utils");

const resolvers = {
  Mutation: {
    createUser: async (_, { email, username }) => {
      const confirmationToken = generateUniqueToken();

      const user = await User.create({ email, username, confirmationToken });

      sendConfirmationEmail(email, confirmationToken);

      return user;
    },
    verifyEmail: async (_, { token }) => {
      const user = await User.findOne({ confirmationToken: token });

      if (!user) {
        throw new Error("Invalid or expired token.");
      }

      user.isVerified = true;
      user.confirmationToken = undefined;
      await user.save();

      return "Email successfully verified!";
    },
    resendVerificationEmail: async (_, { email }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("User not found. Please sign up first.");
      }

      if (user.isVerified) {
        throw new Error("User is already verified.");
      }

      const newConfirmationToken = generateUniqueToken();

      user.confirmationToken = newConfirmationToken;
      await user.save();

      sendConfirmationEmail(email, newConfirmationToken);

      return "New verification email sent. Please check your inbox.";
    },
  },
};

module.exports = resolvers;
