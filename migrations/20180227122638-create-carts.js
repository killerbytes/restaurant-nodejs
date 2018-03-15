'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      checkout: {
        type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false
      },
      is_checkout: {
        type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'customers',
          key: 'id'
        }
      },
      table_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tables',
          key: 'id'
        }
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('carts');
  }
};