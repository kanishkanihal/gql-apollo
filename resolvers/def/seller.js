const { Books, Sellers, Authors, SellersBooks } = require("../../models/index");

module.exports = {
  Query: {
    async seller() {
      return await Sellers.findAll({ raw: true });
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
    }
  }
};
