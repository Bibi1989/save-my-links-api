"use strict";
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define(
    "History",
    {
      title: DataTypes.STRING,
      link: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  History.associate = function (models) {
    History.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return History;
};
