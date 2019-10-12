const { Books, Authors } = require("../../models/index");

module.exports = {
  Query: {
    async author(parent, args, context, info) {
      return await Authors.findAll({ raw: true });
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
  Mutation: {
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
