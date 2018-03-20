'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DECIMAL, allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER, allowNull: false
      },
      status: {
        type: Sequelize.STRING, allowNull: false, defaultValue: 'pending'
      },
      is_void: {
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
      product_id: {
        type: Sequelize.INTEGER, allowNull: false,
        references: {
          model: 'products',
          key: 'id'
        }
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
    return queryInterface.dropTable('orders');
  }
};