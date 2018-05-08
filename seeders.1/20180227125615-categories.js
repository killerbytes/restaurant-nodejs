'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [{
      name: 'Drinks',
      order: 6
    }, {
      name: 'Appetizers',
      order: 5
    }, {
      name: 'Beef',
      order: 3
    }, {
      name: 'Chicken',
      order: 1
    }, {
      name: 'Pork',
      order: 2
    }, {
      name: 'Vegetables',
      order: 4
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
