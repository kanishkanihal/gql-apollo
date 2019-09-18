"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addConstraint("Books", ["authorId"], {
        type: "foreign key",
        name: "books_fkey_author",
        references: {
          //Required field
          table: "Authors",
          field: "id"
        },
        onDelete: "no action",
        onUpdate: "no action"
      })
      .then(() => {
        return queryInterface.addConstraint("SellersBooks", ["sellerId"], {
          type: "foreign key",
          name: "sellersbooks_fkey_seller",
          references: {
            //Required field
            table: "Sellers",
            field: "id"
          },
          onDelete: "no action",
          onUpdate: "no action"
        });
      })
      .then(() => {
        return queryInterface.addConstraint("SellersBooks", ["bookId"], {
          type: "foreign key",
          name: "sellersbooks_fkey_book",
          references: {
            //Required field
            table: "Books",
            field: "id"
          },
          onDelete: "no action",
          onUpdate: "no action"
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .removeConstraint("Books", "books_fkey_author")
      .then(() => {
        return queryInterface.removeConstraint(
          "SellersBooks",
          "sellersbooks_fkey_seller"
        );
      })
      .then(() => {
        return queryInterface.removeConstraint(
          "SellersBooks",
          "sellersbooks_fkey_book"
        );
      });
  }
};
