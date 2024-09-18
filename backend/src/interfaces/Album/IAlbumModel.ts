import IAlbum from './IAlbum';
import { ID } from '..';

export interface IAlbumModel {
  findAll(): Promise<IAlbum[]>,
  findById(id: ID): Promise<IAlbum | null>
  createAlbum(
    name: IAlbum['name'],
    artist: IAlbum['artist'],
    releaseDate: IAlbum['releaseDate']
  ): Promise<IAlbum>;
  updateAlbum(
    id: ID,
    update: Partial<IAlbum>
): Promise<IAlbum | null>,
  deleteAlbum(id: ID): Promise<boolean>
}