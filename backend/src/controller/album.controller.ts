import { Request, Response } from 'express';
import AlbumService from '../services/album.service';
import mapStatusHTTP from '../utils/MapStatusHTTP';

export default class AlbumController {
  constructor(private albumService = new AlbumService()) { }

  public async getAllAlbums(_req: Request, res: Response) {
    const serviceResponse = await this.albumService.getAllAlbums();
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data); 
  }

  public async getByIdAlbum(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.albumService.getByIdAlbum(Number(id));
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async createAlbum(req: Request, res:Response):Promise<Response>{
    const {
      name,
      artist,
      releaseDate
    } = req.body

    try {
        const serviceResponse = await this.albumService.createAlbum(
        name,
        artist,
        releaseDate
      )

      if (serviceResponse.status !== "CREATE"){
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
      }
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    } catch (error) {
      return res.status(500).json({ message: `Erro interno: ${error}` });
    }
  }

  public async updateAlbum(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const updates = req.body;

    try {
      const serviceResponse = await this.albumService.updateAlbum(Number(id), updates);

      if (serviceResponse.status !== "SUCCESSFUL") {
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
      }

      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    } catch (error) {
      return res.status(500).json({ message: `Erro interno: ${error}` });
    }
  }

  public async deleteAlbum (req: Request, res: Response):Promise<Response>{
    const { id } = req.params;
    try {
      const serviceResponse = await this.albumService.deleteAlbum(Number(id));

      if (serviceResponse.status !== "SUCCESSFUL"){
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
      }
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
    } catch (error) {
      return res.status(500).json({ message: `Erro interno: ${error}` })
    }
  }
}