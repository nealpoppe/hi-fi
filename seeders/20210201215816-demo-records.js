'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Records', [
       {
         artist: "Motley Crue",
         title: "Girls, Girls Girls"
       },
       {
        artist: "Motley Crue",
        title: "Dr. Feelgood"
      },
      {
        artist: "Motley Crue",
        title: "Shout at the Devil"
      },
      {
        artist: "Motley Crue",
        title: "Theatre of Pain"
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
