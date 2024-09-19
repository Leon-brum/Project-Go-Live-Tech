import IMusic from './IMusic';
import { ID } from '..';

export interface IMusicModel {
  findAll(): Promise<IMusic[]>,
  findById(id: ID): Promise<IMusic | null>,
  findByAlbumId(albumId: number): Promise<IMusic[]>,
  createMusic(
    name: IMusic['name'],
    artist: IMusic['artist'],
    releaseDate: IMusic['releaseDate'],
    albumId: IMusic['albumId']
  ): Promise<IMusic>,
  updateMusic(
    id: ID,
    updates: Partial<IMusic>
  ): Promise<IMusic | null>,
  deleteMusic(id: ID): Promise<boolean>
}
