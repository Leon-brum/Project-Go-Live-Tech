import { Router } from 'express';
import userRouter from './userRouter';
import albumRouter from './albumRouter';

const router = Router();
router.use('/login', userRouter);
router.use('/album', userRouter);

export default router;