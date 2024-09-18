import { Router } from 'express';
import userRouter from './userRouter';
import albumRouter from './albumRouter';
import musicRouter from './musicRouter'

const router = Router();
router.use('/login', userRouter);
router.use('/album', albumRouter);
router.use('/music', musicRouter);

export default router;