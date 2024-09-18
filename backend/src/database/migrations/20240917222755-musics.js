'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('musics', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      artist: {
        allowNull: false,
        type: Sequelize.STRING
      },
      releaseDate: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        field: 'release_date'
      },
      albumId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        field: 'album_id',
        references: {
          model: 'albums',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
        
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        field: 'deleted_at'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('musics');
  }
};