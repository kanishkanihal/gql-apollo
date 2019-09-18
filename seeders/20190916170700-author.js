"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Authors",
      [
        {
          id: 1,
          name: "Nicholas C. Zakas"
        },
        {
          id: 2,
          name: "Kyle Simpson"
        },
        {
          id: 3,
          name: "Marijn Haverbeke"
        },
        {
          id: 4,
          name: "Addy Osmani"
        },
        {
          id: 5,
          name: "Axel Rauschmayer"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Authors", null, {});
  }
};
