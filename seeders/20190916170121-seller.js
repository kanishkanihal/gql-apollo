"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Sellers",
      [
        {
          id: 1,
          name: "Himalaya Book World"
        },
        {
          id: 2,
          name: "J B Book Sellers & Distributors"
        },
        {
          id: 3,
          name: "Osmania Medical Book House"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Sellers", null, {});
  }
};
