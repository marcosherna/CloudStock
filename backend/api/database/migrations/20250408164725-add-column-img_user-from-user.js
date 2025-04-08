'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'img_user', {
      type: Sequelize.STRING,
      allowNull: true, 
      after: 'username'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'img_user');
  }
};
