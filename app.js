const { ApolloServer, gql } = require('apollo-server')
const { 
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');

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

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  plugins: [
    process.env.NODE_ENV === 'production' ?
      ApolloServerPluginLandingPageProductionDefault({ footer: false }) :
      ApolloServerPluginLandingPageLocalDefault({ footer: false })
  ]
});

server
  .listen({ port: process.env.PORT || 9000 })
  .then(serverInfo => console.log(`Server running at ${serverInfo.url}`));