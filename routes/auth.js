import {Router} from 'express'
import { checkAuth } from '../middlewares/checkAuth'
import { register,signin } from '../controllers/auth';

const router = Router();
 router.post('/signin',checkAuth, register);
 router.post('/signup',checkAuth, signin);
export default router;
