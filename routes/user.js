import {Router} from 'express'
import { checkAuth } from '../middlewares/checkAuth'
import { register,login } from '../controllers/user';

const router = Router();
 router.post('./users',checkAuth, register);
 router.get('./users/:id',checkAuth, login);
export default router;
