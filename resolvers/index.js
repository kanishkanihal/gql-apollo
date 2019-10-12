const seller = require("./def/seller");
const author = require("./def/author");
const book = require("./def/book");
let resolvers = {
  Query: {},
  Mutation: {}
};

Object.assign(resolvers.Query, seller.Query);
Object.assign(resolvers.Mutation, seller.Mutation);
delete seller.Query;
delete seller.Mutation;
Object.assign(resolvers, seller);

Object.assign(resolvers.Query, author.Query);
Object.assign(resolvers.Mutation, author.Mutation);
delete author.Query;
delete author.Mutation;
Object.assign(resolvers, author);

Object.assign(resolvers.Query, book.Query);
Object.assign(resolvers.Mutation, book.Mutation);
delete book.Query;
delete book.Mutation;
Object.assign(resolvers, book);

module.exports = {
  resolvers
};
//
