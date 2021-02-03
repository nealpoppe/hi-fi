'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserRecords', [
      {
        userId:1,
        recordId:1
    },
      {
        userId:1,
        recordId:3
    },
      {
        userId:2,
        recordId:2
      },
    {
        userId:3,
        recordId:4
    },
      {
        userId:4,
        recordId:3
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserRecords', null, {});
    
  }
};
