const { User } = require("../models");
const { generateUniqueToken, sendConfirmationEmail } = require("../utils");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
  },
  Mutation: {
    createUser: async (_, { email, username }) => {
      const confirmationToken = generateUniqueToken();

      const user = await User.create({ email, username, confirmationToken });
      console.log("User Created");

      try {
        sendConfirmationEmail(email, confirmationToken);
        console.log(`Email sent to ${email}`);
      } catch (error) {
        console.error("Error sending confirmation email:", error);
      }

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
