const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas'); // Aggregated GraphQL schemas
const resolvers = require('./resolvers'); // Aggregated GraphQL resolvers

// Optional: Additional server configuration
const context = ({ req }) => {
  // Add user authentication or custom headers if needed
  const token = req.headers.authorization || '';
  return { token };
};

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: true, // Enable introspection for development
  playground: true,    // Enable GraphQL Playground
});

// Start the server
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 GraphQL Server ready at ${url}`);
});
