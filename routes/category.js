
import {Router} from 'express'
import { create, read } from '../controllers/category';
import { checkAuth } from '../middlewares/checkAuth';

const  router = Router();

router.post('/category', checkAuth,create )
router.get('/category/:id', checkAuth,read )
export default router;
