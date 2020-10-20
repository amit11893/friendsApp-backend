'use strict';

const data = require('../data');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', data.users, {});
    await queryInterface.bulkInsert('Friendships', data.friendships, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Friendships', null, {});
  }
};
