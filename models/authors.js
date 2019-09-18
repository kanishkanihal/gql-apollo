"use strict";
module.exports = (sequelize, DataTypes) => {
  const Authors = sequelize.define(
    "Authors",
    {
      name: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  Authors.associate = function(models) {
    Authors.hasMany(models.Books, {
      foreignKey: "authorId",
      sourceKey: "id"
    });
  };
  return Authors;
};
