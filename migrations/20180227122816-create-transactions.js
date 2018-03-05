'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.DECIMAL, allowNull: false, defaultValue: 0
      },
      total_price: {
        type: Sequelize.DECIMAL, allowNull: false
      },
      total_amount_due: {
        type: Sequelize.DECIMAL, allowNull: false
      },
      notes: {
        type: Sequelize.TEXT
      },
      void: {
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
      cart_id: {
        type: Sequelize.INTEGER, allowNull: false, 
        references: {
          model: 'carts',
          key: 'id'
        }
      },
      user_id: {
        type: Sequelize.INTEGER, allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('transactions');
  }
};