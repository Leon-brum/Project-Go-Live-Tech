import { Router } from 'express';
import albumRouter from './albumRouter';
import musicRouter from './musicRouter'

const router = Router();
router.use('/album', albumRouter);
router.use('/music', musicRouter);

export default router;