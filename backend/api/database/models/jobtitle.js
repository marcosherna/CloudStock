'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobTitle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobTitle.init({
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true, 
    },
    description: DataTypes.TEXT,
    status: {
      type: DataTypes.BOOLEAN, 
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'JobTitle',
  });
  return JobTitle;
};