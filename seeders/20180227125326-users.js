'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      username: 'ironman',
      name: 'Tony Stark',
      roles: 'user',
      password: '$2a$10$FYjXE2j2sqmChFncEYnhQ.XrpAJHZK7tUKqrpusG..RjVXl00JApK',
      active: true,
      created_at: "2017-06-04 02:20:52",
      updated_at: "2017-05-28 23:12:28"
    }, {
      username: 'spiderman',
      name: 'Peter Parker',
      roles: 'user,kitchen',
      password: '$2a$10$FYjXE2j2sqmChFncEYnhQ.XrpAJHZK7tUKqrpusG..RjVXl00JApK',
      active: true,
      created_at: "2017-06-04 02:20:52",
      updated_at: "2017-05-28 23:12:28"
    }, {
      username: 'batman',
      name: 'Bruce Wayne',
      roles: 'user,kitchen,cashier,manager',
      password: '$2a$10$FYjXE2j2sqmChFncEYnhQ.XrpAJHZK7tUKqrpusG..RjVXl00JApK',
      active: true,
      created_at: "2017-06-04 02:20:52",
      updated_at: "2017-05-28 23:12:28"
    }, {
      username: 'superman',
      name: 'Clark Kent',
      roles: 'user,kitchen,cashier',
      password: '$2a$10$FYjXE2j2sqmChFncEYnhQ.XrpAJHZK7tUKqrpusG..RjVXl00JApK',
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
