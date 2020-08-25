"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Journey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Journey.belongsTo(models.User, {
        as: "user",
        foreignKey: {
          name: "jnUserId",
        },
      });
    }
  }
  Journey.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      jnImg: DataTypes.STRING,
      jnUserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Journey",
    }
  );
  return Journey;
};
