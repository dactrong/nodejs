
import {Router} from 'express'
import { create, list, read, remove, update } from '../controllers/category';
import { userById } from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth';

const  router = Router();

router.post('/category/:userId', requireSignin, isAuth, isAdmin, create )
router.get('/category', checkAuth,list )
router.get('/category/:id', checkAuth,read )
router.delete('/category/:id/:userId',  requireSignin, isAuth, isAdmin, remove);
router.put('/category/:id/:userId', requireSignin, isAuth, isAdmin, update);

router.param("userId", userById);
export default router;
