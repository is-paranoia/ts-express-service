import objectsRoutes from './objects.routes';
import {Router} from 'express';

const router = Router();

router.use('/objects', objectsRoutes);

export default router;