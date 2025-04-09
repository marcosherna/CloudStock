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
    }

    toJSON() {
      const user = Object.assign({}, this.get());
      user.avatar = user.img_user || null; 
      delete user.password;
      delete user.img_user;
      return { 
        id: user.id, 
        avatar: user.avatar,
        ...user
      };
    }
  }
  User.init({
    username: DataTypes.STRING(15),
    img_user: DataTypes.STRING,
    email: DataTypes.STRING, 
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User', 
  });
  return User;
};