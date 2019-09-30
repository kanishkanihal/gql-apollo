const {
  ApolloServer,
  gql,
  makeExecutableSchema,
  addSchemaLevelResolveFunction
} = require("apollo-server");

const { typeDefs } = require("./typeDefs/index");
const { resolvers } = require("./resolvers");

// A map of functions which return data for the schema.

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const rootResolveFunction = (parent, args, context, info) => {
  //console.log((parent, args, context, info));
};

addSchemaLevelResolveFunction(schema, rootResolveFunction);

const server = new ApolloServer({ schema });
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
