import Album from '../database/models/Album'; 
import { ID } from '../interfaces';
import IAlbum from '../interfaces/Album/IAlbum';
import { IAlbumModel } from '../interfaces/Album/IAlbumModel';

export default class AlbumModel implements IAlbumModel {
  private model = Album;

  async findAll(): Promise<IAlbum[]> {
    const albuns = await this.model.findAll();
    return albuns
  };


  async findById(id: number): Promise<IAlbum | null> {
    const album = await this.model.findByPk(id);
    if (!album) return null;
    return album;
  }

  async createAlbum(name: IAlbum['name'], artist: IAlbum['artist'], releaseDate: IAlbum['releaseDate']): Promise<IAlbum> {
    const newAlbum = await this.model.create({
      name,
      artist,
      releaseDate
    });
    return {
      id: newAlbum.id,
      name: newAlbum.name,
      artist: newAlbum.artist,
      releaseDate: newAlbum.releaseDate
    };
  }

  async updateAlbum(id: ID, updates: Partial<IAlbum>): Promise<IAlbum | null> {
    const album = await this.model.findByPk(id);

    if (!album) return null;

    await album.update(updates);

    return {
      id: album.id,
      name: album.name,
      artist: album.artist,
      releaseDate: album.releaseDate
    };
  }
  //Revisar o delete
  async deleteAlbum(id: ID): Promise<boolean> {
    const rowsDeleted = await this.model.destroy({
      where: { id }
    })
    return rowsDeleted > 0;
  }
}