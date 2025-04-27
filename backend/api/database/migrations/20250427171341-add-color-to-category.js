'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('Categories', 'color', {
      type: Sequelize.STRING(25),
      allowNull: true,
      defaultValue: null, 
      after: 'status'
    }); 
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn('Categories', 'color'); 
  }
};
