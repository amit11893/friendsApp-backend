'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.User, {
        through: 'Friendship',
        as: 'Friends',
        foreignKey: 'userId',
        otherKey: 'friendId'
      })
      User.belongsToMany(models.User, {
        through: 'Friendship',
        as: 'userFriends',
        foreignKey: 'friendId',
        otherKey: 'userId'
      })
    }
  };
  User.init({
    id: {type:DataTypes.INTEGER, primaryKey: true},
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};