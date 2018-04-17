'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING, unique: true, allowNull: false
      },
      name: {
        type: Sequelize.STRING, allowNull: false
      },
      role: {
        type: Sequelize.STRING, defaultValue: 'user'
      },
      password: {
        type: Sequelize.STRING, allowNull: false
      },
      active: {
        type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};