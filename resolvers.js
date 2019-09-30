const { Books, Sellers, Authors, SellersBooks } = require("./models/index");

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
  },
  Mutation: {
    //Seller
    addSeller: async (parent, args) => {
      const seller = {
        name: args.name
      };
      return await Sellers.create(seller);
    },
    updateSeller: async (parent, args) => {
      let result = await Sellers.update(
        { name: args.name },
        {
          where: {
            id: args.id
          }
        }
      );
      return result[0];
    },
    deleteSeller: async (parent, args) => {
      return await Sellers.destroy({
        where: {
          id: args.id
        }
      });
    },
    //Author
    addAuthor: async (parent, args) => {
      const author = {
        name: args.name
      };
      return await Authors.create(author);
    },
    updateAuthor: async (parent, args) => {
      let result = await Authors.update(
        { name: args.name },
        {
          where: {
            id: args.id
          }
        }
      );
      return result[0];
    },
    deleteAuthor: async (parent, args) => {
      return await Authors.destroy({
        where: {
          id: args.id
        }
      });
    }
  }
};
module.exports = {
  resolvers
};
