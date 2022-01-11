const { ApolloServer, gql } = require('apollo-server')
const { 
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');

const typeDefs = gql`
  type Query {
    greeting: String
  }

  type Info {
    name: String
    description: String
    github: String
    email: String
    position: String
    age: Int
  }

  type Query {
    info: Info
  }
`;


const info = {
  name: 'Ching Hui',
  description: "I'm a Uaena, also a frontend developer :)",
  github: 'https://github.com/ChingHuiHui',
  email: 'sunny70624@gmail.com',
  position: 'Frontend developer',
  age: 22,
}

const resolvers = {
  Query: {
    greeting: () => 'Hello HUIHUI GraphQL world!👋',
    info: () => info
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