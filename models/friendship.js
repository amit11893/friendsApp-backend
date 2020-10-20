'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friendship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Friendship.belongsTo(models.User);
    }
  };
  Friendship.init({
    userId: DataTypes.INTEGER,
    friendId: DataTypes.INTEGER,
    accepted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Friendship',
  });
  return Friendship;
};