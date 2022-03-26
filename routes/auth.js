import {Router} from 'express'
import { checkAuth } from '../middlewares/checkAuth'
import { register,signin } from '../controllers/auth';

const router = Router();
 router.post('/signup',checkAuth, register);
 router.post('/signin',checkAuth, signin);
export default router;
