'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Brand.init({
    name: {
      type: DataTypes.STRING(20), 
      unique: true,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    status: {
      type: DataTypes.BOOLEAN, 
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Brand',
  });
  return Brand;
};