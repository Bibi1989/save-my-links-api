"use strict";
module.exports = (sequelize, DataTypes) => {
  const Url = sequelize.define(
    "Url",
    {
      title: DataTypes.STRING,
      link: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Url.associate = function (models) {
    Url.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return Url;
};
