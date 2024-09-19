import Music from '../database/models/Music'; 
import Album from '../database/models/Album';
import { ID } from '../interfaces';
import IMusic from '../interfaces/Music/IMusic';
import { IMusicModel } from '../interfaces/Music/IMusicModel';

export default class MusicModel implements IMusicModel {
  private model = Music;

  async findAll(): Promise<IMusic[]> {
    const musics = await this.model.findAll({
      attributes: ['id', 'name', 'artist', 'releaseDate', 'albumId'],
      include: [{
        model: Album,
        as: 'album',
        attributes: { exclude: ['id'] }
      }]
    });
    return musics.map(music => ({
      id: music.id,
      name: music.name,
      artist: music.artist,
      releaseDate: music.releaseDate,
      albumId: music.albumId
    }));
  }

  async findByAlbumId(albumId: number): Promise<IMusic[]> {
    if (isNaN(albumId)) {
      throw new Error('ID do álbum deve ser um número válido.');
    }
    const musics = await this.model.findAll({
      where: { albumId },
      attributes: ['id', 'name', 'artist', 'releaseDate', 'albumId'],
      include: [{
        model: Album,
        as: 'album',
        attributes: { exclude: ['id'] }
      }]
    });

    return musics.map(music => ({
      id: music.id,
      name: music.name,
      artist: music.artist,
      releaseDate: music.releaseDate,
      albumId: music.albumId,
    }));
  }

  async findById(id: number): Promise<IMusic | null> {
    const music = await this.model.findByPk(id, {
      attributes: ['id', 'name', 'artist', 'releaseDate', 'albumId'],
    });
    if (!music) return null;
    return {
      id: music.id,
      name: music.name,
      artist: music.artist,
      releaseDate: music.releaseDate,
      albumId: music.albumId,
    };
  }

  async createMusic(name: IMusic['name'], artist: IMusic['artist'], releaseDate: IMusic['releaseDate'], albumId: IMusic['albumId']): Promise<IMusic> {
    const newMusic = await this.model.create({
      name,
      artist,
      releaseDate,
      albumId,
    });
    return {
      id: newMusic.id,
      name: newMusic.name,
      artist: newMusic.artist,
      releaseDate: newMusic.releaseDate,
      albumId: newMusic.albumId,
    };
  }

  async updateMusic(id: ID, updates: Partial<IMusic>): Promise<IMusic | null> {
    const music = await this.model.findByPk(id);

    if (!music) return null;

    await music.update(updates);

    return {
      id: music.id,
      name: music.name,
      artist: music.artist,
      releaseDate: music.releaseDate,
      albumId: music.albumId,
    };
  }

  async deleteMusic(id: ID): Promise<boolean> {
    const rowsDeleted = await this.model.destroy({
      where: { id },
      force: false
    });
    return rowsDeleted > 0;
  }
}