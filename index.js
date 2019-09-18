const { ApolloServer, gql } = require("apollo-server");
var sequelize = require("sequelize");
const { Books, Sellers, Authors, SellersBooks } = require("./models/index");

// The GraphQL schema
const typeDefs = gql`
  type Book {
    id: ID!
    isbn: String
    title: String
    subtitle: String
    author: Author
    seller: [Seller]
  }

  type Author {
    id: ID!
    name: String
    book: [Book]
  }

  type Seller {
    id: ID!
    name: String
    book: [Book]
  }

  type Query {
    author: [Author]
    book: [Book]
    seller: [Seller]
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    async author(parent, args, context, info) {
      return await Authors.findAll({ raw: true });
    },
    async book() {
      return await Books.findAll({ raw: true });
    },
    async seller() {
      return await Sellers.findAll({ raw: true });
    }
  },
  Author: {
    async book(author) {
      return await Books.findAll({
        where: {
          authorId: author.id
        },
        raw: true
      });
    }
  },
  Book: {
    async author(book) {
      return await Authors.findOne({
        where: {
          id: book.authorId
        },
        raw: true
      });
    },
    async seller(book) {
      return await Sellers.findAll({
        include: [
          {
            model: SellersBooks,
            where: { bookId: book.id }
          }
        ],
        raw: true
      });
    }
  },
  Seller: {
    async book(seller) {
      return await Books.findAll({
        include: [
          {
            model: SellersBooks,
            where: { sellerId: seller.id }
          }
        ],
        raw: true
      });
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
