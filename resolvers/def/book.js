const { Books, Sellers, Authors, SellersBooks } = require("../../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const array = require("lodash/array");
const _ = require("lodash");
module.exports = {
  Query: {
    async book() {
      return await Books.findAll({ raw: true });
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

  Mutation: {
    //Add a book and sellers - Start
    addBook: async (parent, args) => {
      const book = {
        isbn: args.isbn,
        title: args.title,
        subtitle: args.subtitle,
        authorId: args.author
      };
      //Insert Book
      let b = await Books.create(book).catch(e => {
        console.error(e.message);
      });
      let sellers = args.seller.map(v => {
        return { sellerID: v, bookID: b.id };
      });
      //Insert seller books
      await SellersBooks.bulkCreate(sellers, { individualHooks: true }).catch(
        e => {
          console.error(e.message);
        }
      );
      return b;
    },
    //Add a book and sellers - End
    //Update a book and book sellers - Start
    updateBook: async (parent, args) => {
      //Find all sellers which have the book.
      let sellers = await SellersBooks.findAll({
        attributes: ["sellerID"],
        where: {
          bookID: args.id,
          sellerID: { [Op.in]: args.seller }
        },
        raw: true
      }).catch(e => {
        console.error(e.message);
      });
      let es = sellers.map(s => {
        return s.sellerID;
      });
      //New sellers
      let nsid = array.difference(args.seller, es);
      let ns = nsid.map(v => {
        return { sellerID: v, bookID: args.id };
      });
      //Add new sellers
      let a = await SellersBooks.bulkCreate(ns, {
        individualHooks: true
      }).catch(e => {
        console.error(e.message);
      });
      //Delete sellers
      let b = await SellersBooks.destroy({
        where: {
          bookID: args.id,
          sellerID: { [Op.notIn]: args.seller }
        }
      }).catch(e => {
        console.error(e.message);
      });

      //Update book details
      //Remove the ID & Serllers
      let r = _.omit(args, ["seller", "id"]);
      let c = await Books.update(r, {
        where: {
          id: args.id
        }
      });
      //Get the book details.
      console.log("a", _.size(ns), "b", b, "c", c);
      return _.add(b, ...c, _.size(ns));
    },
    //Update a book and book sellers - End
    //Delete a book and book sellers - Start
    deleteBook: async (parent, args) => {
      //Delete seller books
      await SellersBooks.destroy({
        where: {
          bookID: args.id
        }
      }).catch(e => {
        console.error(e.message);
      });
      //Delete books
      await Books.destroy({
        where: {
          id: args.id
        }
      }).catch(e => {
        console.error(e);
      });
      return args.id;
    }
    //Delete a book and book sellers - Start
  }
};
