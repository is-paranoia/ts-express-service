import {Router} from 'express';
import {getObject} from '../controllers/objects';

const router = Router();

router.get('/hello', getObject);

export default router;