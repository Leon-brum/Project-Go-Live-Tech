import { Router, Request, Response } from 'express';
import MusicController from '../controller/music.controller';

const musicController = new MusicController()

const router = Router();

router.get('/', (req: Request, res: Response) => musicController.getAllMusic(req, res));

router.get('/:id', (req: Request, res: Response) => musicController.getByIdMusic(req, res));

router.get('/album/:id', (req: Request, res: Response) => musicController.getByAlbumId(req, res));

router.post('/', (req: Request, res: Response) => musicController.createMusic(req, res));

router.put('/:id', (req: Request, res: Response) => musicController.updateMusic(req, res));

router.delete('/:id', (req: Request, res: Response) => musicController.deleteMusic(req, res));

export default router;