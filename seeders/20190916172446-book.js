"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Books",
      [
        {
          id: 1,
          isbn: "9781593275846",
          title: "Eloquent JavaScript, Second Edition",
          subtitle: "A Modern Introduction to Programming",
          authorId: 1
        },
        {
          id: 2,
          isbn: "9781449331818",
          title: "Learning JavaScript Design Patterns",
          subtitle: "A JavaScript and jQuery Developer's Guide",
          authorId: 1
        },
        {
          id: 3,
          isbn: "9781449365035",
          title: "Speaking JavaScript",
          subtitle: "An In-Depth Guide for Programmers",
          authorId: 2
        },
        {
          id: 4,
          isbn: "9781491950296",
          title: "Programming JavaScript Applications",
          subtitle:
            "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
          authorId: 3
        },
        {
          id: 5,
          isbn: "9781593277574",
          title: "Understanding ECMAScript 6",
          subtitle: "The Definitive Guide for JavaScript Developers",
          authorId: 4
        },
        {
          id: 6,
          isbn: "9781491904244",
          title: "You Don't Know JS",
          subtitle: "ES6 & Beyond",
          authorId: 4
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Books", null, {});
  }
};
