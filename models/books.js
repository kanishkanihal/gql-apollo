"use strict";
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define(
    "Books",
    {
      isbn: DataTypes.STRING,
      title: DataTypes.STRING,
      subtitle: DataTypes.STRING,
      authorId: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );
  Books.associate = function(models) {
    Books.belongsTo(models.SellersBooks, {
      foreignKey: "id",
      targetKey: "bookID"
    });
  };
  return Books;
};
