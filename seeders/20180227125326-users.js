'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      username: 'ironman',
      name: 'Tony Stark',
      roles: 'server',
      password: 'test',
      email: 'tony@email.com',
      active: true,
      created_at: "2017-06-04 02:20:52",
      updated_at: "2017-05-28 23:12:28"      
    },{
      username: 'batman',
      name: 'Bruce Wayne',
      roles: 'manager',
      password: 'test',
      email: 'bruce@email.com',
      active: true,
      created_at: "2017-06-04 02:20:52",
      updated_at: "2017-05-28 23:12:28"      
    },{
      username: 'superman',
      name: 'Clark Kent',
      roles: 'cashier',
      password: 'test',
      email: 'clark@email.com',
      active: true,
      created_at: "2017-06-04 02:20:52",
      updated_at: "2017-05-28 23:12:28"      
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
