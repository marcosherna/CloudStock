'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'password', {
      type: Sequelize.STRING,
      allowNull: false, 
      after: 'email'
    });

    await queryInterface.addColumn('Users', 'username', {
      type: Sequelize.STRING(15),
      allowNull: false, 
      after: 'id'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'password');
    await queryInterface.removeColumn('Users', 'username'); 
  }
};
