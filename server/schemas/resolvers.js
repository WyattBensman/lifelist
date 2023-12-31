const { User } = require("../models");
const { generateUniqueToken, sendConfirmationEmail } = require("../utils");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
  },
  Mutation: {
    // CREATE USER
    createUser: async (_, { email, username }) => {
      try {
        const confirmationToken = generateUniqueToken();

        const user = await User.create({ email, username, confirmationToken });
        sendConfirmationEmail(email, confirmationToken);

        return user;
      } catch (error) {
        throw error;
      }
    },
    // VERIFY EMAIL
    verifyEmail: async (_, { token }) => {
      try {
        const user = await User.findOne({ confirmationToken: token });

        if (!user) {
          throw new Error("Invalid or expired token.");
        }

        user.isVerified = true;
        user.confirmationToken = undefined;
        await user.save();

        return "Email successfully verified!";
      } catch (error) {
        throw error;
      }
    },
    // RESEND VERTIFICATION EMAIL
    resendVerificationEmail: async (_, { email }) => {
      try {
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
        await sendConfirmationEmail(
          email,
          newConfirmationToken,
          "Here is your new verification email message."
        );

        return "New verification email sent. Please check your inbox.";
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = resolvers;
