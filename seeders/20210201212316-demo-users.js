'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
      {
        name: "Vince",
        username: "lead",
        password: "lead",
      },
      {
        name: "Nikki",
        username: "bass",
        password: "bass",
      },
      {
        name: "Mick",
        username: "guitar",
        password: "guitar",
      },
      {
        name: "Tommy",
        username: "drums",
        password: "drums",
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
