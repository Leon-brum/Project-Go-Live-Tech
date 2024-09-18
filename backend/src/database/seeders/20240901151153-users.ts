import { QueryInterface } from 'sequelize';
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('users',[
      {
        user:'admin',
        password: '$2a$10$l5b.3Qn8bdPh1NsS2YznGutC4Lf5nA9JjyZNJDtYtrbS2pO1F6aQq'
        // senha: 12345678
      },
    ])
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('users', {});
  }
};