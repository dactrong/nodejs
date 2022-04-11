import {Router} from 'express'
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth'
import { listUser, readUser, register,remove,signin, userUpdate } from '../controllers/auth';
import { userById } from '../controllers/user';

const router = Router();
 router.post('/signup',checkAuth, register);
 router.put('/update/:id',checkAuth, userUpdate);
 router.get('/listUser',checkAuth, listUser);
 router.get('/readUser/:id',checkAuth, readUser);
 router.delete('/remove/:id/:userId',  requireSignin, isAuth, isAdmin, remove);
 router.post('/signin',checkAuth, signin);

 router.param("userId", userById);
export default router;
