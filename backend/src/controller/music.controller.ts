import { Request, Response } from 'express';
import MusicService from '../services/music.service';
import mapStatusHTTP from '../utils/MapStatusHTTP';

export default class MusicController {
  constructor(private musicService = new MusicService()) { }

  public async getAllMusic(_req: Request, res: Response) {
    const serviceResponse = await this.musicService.getAllMusic();
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data); 
  }

  public async getByIdMusic(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.musicService.getByIdMusic(Number(id));
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async getByAlbumId(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.musicService.getByAlbumId(Number(id));
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async createMusic(req: Request, res:Response):Promise<Response>{
    const {
      name,
      artist,
      releaseDate,
      albumId
    } = req.body

    try {
        const serviceResponse = await this.musicService.createMusic(
        name,
        artist,
        releaseDate,
        albumId
      )
      if (serviceResponse.status !== "CREATE"){
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
      }
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    } catch (error) {
      return res.status(500).json({ message: `Erro interno: ${error}` });
    }
  }

  public async updateMusic(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const updates = req.body;

    try {
      const serviceResponse = await this.musicService.updateMusic(Number(id), updates);

      if (serviceResponse.status !== "SUCCESSFUL") {
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
      }

      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    } catch (error) {
      return res.status(500).json({ message: `Erro interno: ${error}` });
    }
  }

  public async deleteMusic(req: Request, res: Response):Promise<Response>{
    const { id } = req.params;
    try {
      const serviceResponse = await this.musicService.deleteMusic(Number(id));

      if (serviceResponse.status !== "SUCCESSFUL"){
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
      }
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
    } catch (error) {
      return res.status(500).json({ message: `Erro interno: ${error}` })
    }
  }
}