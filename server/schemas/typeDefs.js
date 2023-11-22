const typeDefs = `
type User {
    _id: ID
    email: String
    username: String
    isVerified: Boolean
    confirmationToken: String
}

type Query {
  users: [User]
}

type Mutation {
    createUser(email: String!, username: String!): User!
    verifyEmail(token: String!): String
    resendVerificationEmail(email: String!): String
  }
`;

module.exports = typeDefs;
