import AlbumModel from "../model/AlbumModel";
import IAlbum from "../interfaces/Album/IAlbum";
import { IAlbumModel } from "../interfaces/Album/IAlbumModel";
import { ServiceMessage, ServiceResponse } from '../utils/ServiceResponse'; 

export default class AlbumService {
  constructor(private albumModel: IAlbumModel = new AlbumModel()) { }

  public async getAllAlbums(): Promise<ServiceResponse<IAlbum[]>> {
    const albums = await this.albumModel.findAll();
    return { status: 'SUCCESSFUL', data: albums };
  }

  public async getByIdAlbum(id: number): Promise<ServiceResponse<IAlbum | ServiceMessage>> {
    const album = await this.albumModel.findById(id);
    if (!album) {
      return { status: "NOT_FOUND", data: { message: 'Album não encontrado!' } };
    }
    return { status: "SUCCESSFUL", data: album };
  }

  public async createAlbum(name: IAlbum['name'], artist: IAlbum['artist'], releaseDate: IAlbum['releaseDate']): Promise<ServiceResponse<IAlbum>> {
    const album = await this.albumModel.createAlbum(name, artist, releaseDate);
    return { status: "CREATE", data: album };
  }

  public async updateAlbum(
    id: number,
    updates: Partial<IAlbum>
  ): Promise<ServiceResponse<IAlbum | ServiceMessage>> {
    const updatedAlbum = await this.albumModel.updateAlbum(id, updates);
    if (!updatedAlbum) {
      return { status: "NOT_FOUND", data: { message: 'Álbum não encontrado!' } };
    }
    return { status: "SUCCESSFUL", data: updatedAlbum };
  }

  public async deleteAlbum(id: number): Promise<ServiceResponse<ServiceMessage>> {
    const exist = await this.albumModel.deleteAlbum(id);
    if (!exist) {
      return { status: 'NOT_FOUND', data: { message: 'Id não encontrado' } };
    }
    return { status: "SUCCESSFUL", data: { message: 'Álbum deletado!' } };
  }
}
