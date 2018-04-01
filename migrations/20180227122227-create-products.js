'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING, allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.DECIMAL(10, 2), allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      photo: {
        type: Sequelize.TEXT
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
      },
      deleted_at: {
        type: Sequelize.DATE
      },
      category_id: {
        type: Sequelize.INTEGER, allowNull: false,
        references: {
          model: 'categories',
          key: 'id'
        }
      },


    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};