import { QueryInterface } from 'sequelize';
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('musics',[
      {
        name: 'Intruso',
        artist: 'Lvcas',
        release_date: '2024-08-04',
        album_id: 4
      },
      {
        name: 'Volátil',
        artist: 'Lvcas',
        release_date: '2024-04-30',
        album_id: 4
      },
      {
        name: 'Odisseia',
        artist: 'Lvcas',
        release_date: '2023-09-12',
        album_id: 4
      },
      {
        name: 'Tão Perto',
        artist: 'Lvcas',
        release_date: '2023-03-26',
        album_id: 4
      },
      {
        name: 'Rocks Off',
        artist: 'The Rolling Stones',
        release_date: '1972-04-12',
        album_id: 3
      },
      {
        name: 'Tumbling Dice',
        artist: 'The Rolling Stones',
        release_date: '1972-03-14',
        album_id: 3
      },
      {
        name: 'On the Run',
        artist: 'Pink Floyd',
        release_date: '1973-03-02',
        album_id: 1
      },
      {
        name: 'Time',
        artist: 'Pink Floyd',
        release_date: '1973-03-02',
        album_id: 1
      },
      {
        name: 'Smells Like Teen Spirit',
        artist: 'Nirvana',
        release_date: '1991-09-10',
        album_id: 2
      },
      {
        name: 'In Bloom ',
        artist: 'Nirvana',
        release_date: '1992-11-30',
        album_id: 2
      },
    ])
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('musics', {});
  }
};