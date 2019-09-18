"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sellers = sequelize.define(
    "Sellers",
    {
      name: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  Sellers.associate = function(models) {
    Sellers.belongsTo(models.SellersBooks, {
      foreignKey: "id",
      targetKey: "sellerID"
    });
  };
  return Sellers;
};
