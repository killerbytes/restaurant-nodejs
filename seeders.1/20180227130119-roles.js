'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [{
      name: 'admin'
    }, {
      name: 'manager'
    }, {
      name: 'cashier'
    }, {
      name: 'kitchen'
    }, {
      name: 'waiter'
    }, {
      name: 'user'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
