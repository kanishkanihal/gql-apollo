const fs = require("fs");
let resolvers = {
  Query: {},
  Mutation: {}
};
const files = fs.readdirSync(__dirname.concat("/def"));
files.map(x => {
  let y = require(`./def/${x}`);
  if (y.hasOwnProperty("Query")) {
    Object.assign(resolvers.Query, y.Query);
    delete y.Query;
  }
  if (y.hasOwnProperty("Mutation")) {
    Object.assign(resolvers.Mutation, y.Mutation);
    delete y.Mutation;
  }
  Object.assign(resolvers, y);
});

module.exports = {
  resolvers
};
