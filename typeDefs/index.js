const fs = require("fs");
const { gql } = require("apollo-server");

const files = fs.readdirSync(__dirname.concat("/types"));
const typeDefs = [];
files.map(file => {
  typeDefs.push(
    gql(fs.readFileSync(__dirname.concat(`/types/${file}`), "utf8"))
  );
});

module.exports = {
  typeDefs
};
