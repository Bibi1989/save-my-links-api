"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      username: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Url, {
      foreignKey: "userId",
    });
  };
  return User;
};
