import { QueryInterface } from 'sequelize';
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('albums',[
      {
        name: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        release_date: '1973-03-01'
      },
      {
        name: 'Nevermind',
        artist: 'Nirvana',
        release_date: '1991-09-24'    
      },
      {
        name: 'Exile On Main St.',
        artist: 'The Rolling Stones',
        release_date: '1972-04-12'    
      },
      {
        name: 'Intruso',
        artist: 'Lvcas',
        release_date: '2024-08-04'    
      }
    ])
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('albums', {});
  }
};