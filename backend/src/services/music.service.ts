import MusicModel from "../model/MusicModel";
import AlbumModel from "../model/AlbumModel";
import IMusic from "../interfaces/Music/IMusic";
import { IMusicModel } from "../interfaces/Music/IMusicModel";
import { ServiceMessage, ServiceResponse } from '../utils/ServiceResponse'; 

export default class MusicService {
  private albumModel = new AlbumModel();

  constructor(private musicModel: IMusicModel = new MusicModel()) { }

  public async getAllMusic(): Promise<ServiceResponse<IMusic[]>> {
    const musics = await this.musicModel.findAll();
    return { status: 'SUCCESSFUL', data: musics };
  }

  public async getByIdMusic(id: number): Promise<ServiceResponse<IMusic | ServiceMessage>> {
    const music = await this.musicModel.findById(id);
    if (!music) {
      return { status: "NOT_FOUND", data: { message: 'Música não encontrada!' } };
    }
    return { status: "SUCCESSFUL", data: music };
  }

  public async getByAlbumId(id: number): Promise<ServiceResponse<IMusic[] | ServiceMessage>> {
    const musics = await this.musicModel.findByAlbumId(id);
    if (musics.length === 0) {
      return { status: "NOT_FOUND", data: { message: 'Nenhuma música encontrada para este álbum!' } };
    }
    return { status: "SUCCESSFUL", data: musics };
  }

  public async createMusic(
    name: IMusic['name'],
    artist: IMusic['artist'],
    releaseDate: IMusic['releaseDate'],
    albumId: IMusic['albumId']
  ): Promise<ServiceResponse<IMusic | ServiceMessage>> {
    if (albumId !== null) {
      const albumExists = await this.albumModel.findById(albumId);
      if (!albumExists) {
        return { status: "NOT_FOUND", data: { message: 'Álbum não encontrado!' } };
      }
    }
    const newMusic = await this.musicModel.createMusic(name, artist, releaseDate, albumId);
    return { status: "CREATE", data: newMusic };
  }

  public async updateMusic(
    id: number,
    updates: Partial<IMusic>
  ): Promise<ServiceResponse<IMusic | ServiceMessage>> {
    const music = await this.musicModel.findById(id);
    if (!music) {
      return { status: "NOT_FOUND", data: { message: 'Música não encontrada!' } };
    }
    if (updates.albumId !== undefined) {
      const albumId = updates.albumId;
      if (albumId !== null) {
        const albumExists = await this.albumModel.findById(albumId);
        if (!albumExists) {
          return { status: "NOT_FOUND", data: { message: 'Álbum não encontrado!' } };
        }
      }
    }
    const updatedMusic = await this.musicModel.updateMusic(id, updates);
    return { status: "SUCCESSFUL", data: updatedMusic };
  }

  public async deleteMusic(id: number): Promise<ServiceResponse<ServiceMessage>> {
    const exist = await this.musicModel.deleteMusic(id);
    if (!exist) {
      return { status: 'NOT_FOUND', data: { message: 'Música não encontrada!' } };
    }
    return { status: "SUCCESSFUL", data: { message: 'Música deletada!' } };
  }
}
