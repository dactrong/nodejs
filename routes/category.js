
import {Router} from 'express'
import { create } from '../controllers/category';
import { checkAuth } from '../middlewares/checkAuth';

const  router = Router();

router.post('/category', checkAuth,create )

export default router;
