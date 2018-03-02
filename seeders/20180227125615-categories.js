'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [{
      name: 'Drinks',
    },{
      name: 'Appetizers',
    },{
      name: 'Beef',
    },{
      name: 'Chicken',
    },{
      name: 'Pork',
    },{
      name: 'Vegetables',
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
