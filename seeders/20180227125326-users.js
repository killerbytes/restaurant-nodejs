'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      username: 'admin',
      name: 'Admin',
      role: 'admin',
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
