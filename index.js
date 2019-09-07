const { ApolloServer, gql } = require("apollo-server");
var _ = require("lodash");

let books = [
  {
    isbn: "9781593275846",
    title: "Eloquent JavaScript, Second Edition",
    subtitle: "A Modern Introduction to Programming",
    authorId: 6938033702
  },
  {
    isbn: "9781449331818",
    title: "Learning JavaScript Design Patterns",
    subtitle: "A JavaScript and jQuery Developer's Guide",
    authorId: 6336138879
  },
  {
    isbn: "9781449365035",
    title: "Speaking JavaScript",
    subtitle: "An In-Depth Guide for Programmers",
    authorId: 4113957124
  },
  {
    isbn: "9781491950296",
    title: "Programming JavaScript Applications",
    subtitle:
      "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
    authorId: 9538356997
  },
  {
    isbn: "9781593277574",
    title: "Understanding ECMAScript 6",
    subtitle: "The Definitive Guide for JavaScript Developers",
    authorId: 9538356997
  },
  {
    isbn: "9781491904244",
    title: "You Don't Know JS",
    subtitle: "ES6 & Beyond",
    authorId: 8488125878
  }
];
let authors = [
  {
    id: 9538356997,
    name: "Nicholas C. Zakas"
  },
  {
    id: 8488125878,
    name: "Kyle Simpson"
  },
  {
    id: 6938033702,
    name: "Marijn Haverbeke"
  },
  {
    id: 6336138879,
    name: "Addy Osmani"
  },
  {
    id: 4113957124,
    name: "Axel Rauschmayer"
  }
];
// The GraphQL schema
const typeDefs = gql`
  type Book {
    isbn: String
    title: String
    subtitle: String
    author: Author
  }

  type Author {
    id: ID!
    name: String
    book: [Book]
  }

  type Query {
    author: [Author]
    book: [Book]
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    author(parent, args, context, info) {
      return authors;
    },
    book() {
      return books;
    }
  },
  Author: {
    book(author) {
      return _.filter(books, { authorId: author.id });
    }
  },
  Book: {
    author(book) {
      return _.find(authors, { id: book.authorId });
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
