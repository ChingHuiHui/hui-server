const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => 'Hello HUIHUI GraphQL world!👋',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: process.env.PORT || 9000 })
  .then(serverInfo => console.log(`Server running at ${serverInfo.url}`));