'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init({
    name: DataTypes.STRING(15),
    description: DataTypes.TEXT,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }, 
    color: {
      type: DataTypes.STRING(25),
      allowNull: true,
      defaultValue: null, 
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};