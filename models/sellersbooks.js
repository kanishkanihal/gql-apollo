"use strict";
module.exports = (sequelize, DataTypes) => {
  const SellersBooks = sequelize.define(
    "SellersBooks",
    {
      sellerID: DataTypes.INTEGER,
      bookID: DataTypes.INTEGER
    },
    { timestamps: false }
  );
  SellersBooks.associate = function(models) {
    SellersBooks.hasMany(models.Books, {
      foreignKey: "id",
      sourceKey: "bookID"
    });
    SellersBooks.hasMany(models.Sellers, {
      foreignKey: "id",
      sourceKey: "sellerID"
    });
  };
  return SellersBooks;
};
