"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "SellersBooks",
      [
        {
          sellerId: 1,
          bookId: 1
        },
        {
          sellerId: 1,
          bookId: 2
        },
        {
          sellerId: 2,
          bookId: 1
        },
        {
          sellerId: 2,
          bookId: 3
        },
        {
          sellerId: 2,
          bookId: 4
        },
        {
          sellerId: 3,
          bookId: 6
        },
        {
          sellerId: 3,
          bookId: 5
        },
        {
          sellerId: 3,
          bookId: 4
        },
        {
          sellerId: 3,
          bookId: 3
        },
        {
          sellerId: 3,
          bookId: 1
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("SellersBooks", null, {});
  }
};
