"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("SellersBooks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sellerId: {
        type: Sequelize.INTEGER
        // references: {
        //   model: "Sellers",
        //   key: "id"
        // }
      },
      bookId: {
        type: Sequelize.INTEGER
        // references: {
        //   model: "Books",
        //   key: "isbn"
        // }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("SellersBooks");
  }
};
