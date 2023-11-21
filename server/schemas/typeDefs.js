typeDef = `
type User {
    _id: ID
    email: String
    username: String
    isVerified: Boolean
    confirmationToken: String
}

type Mutation {
    createUser(email: String!, username: String!): User!
    verifyEmail(token: String!): String
    resendVerificationEmail(email: String!): String
  }
`;
