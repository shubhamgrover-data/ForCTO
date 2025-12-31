import { Router } from 'express';
import authRoutes from './auth.routes';
import stockRoutes from './stock.routes';
import companyRoutes from './company.routes';
import userRoutes from './user.routes';
import watchlistRoutes from './watchlist.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/stocks', stockRoutes);
router.use('/companies', companyRoutes);
router.use('/user', userRoutes);
router.use('/watchlist', watchlistRoutes);

export default router;
