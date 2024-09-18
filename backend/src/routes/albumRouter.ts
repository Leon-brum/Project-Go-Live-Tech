import { Router, Request, Response } from 'express';
import AlbumController from '../controller/album.controller';

const albumController = new AlbumController()

const router = Router();

router.get('/', (req: Request, res: Response) => albumController.getAllAlbums(req, res));

router.get('/:id', (req: Request, res: Response) => albumController.getByIdAlbum(req, res));

router.post('/', (req: Request, res: Response) => albumController.createAlbum(req, res));

router.put('/:id', (req: Request, res: Response) => albumController.updateAlbum)

router.delete('/:id', (req: Request, res: Response) => albumController.deleteAlbum(req, res));

export default router;