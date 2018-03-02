'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tables', [{
      name: 'Table One',
    },{
      name: 'Table Two',
    },{
      name: 'Table Three',
    },{
      name: 'Table Four',
    },{
      name: 'Table Five',
    },{
      name: 'Table Six',
    },{
      name: 'Table Seven',
    },{
      name: 'Table Eight',
    },{
      name: 'Table Nine',
    },{
      name: 'Table Ten',
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
