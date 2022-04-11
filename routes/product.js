import { Router } from 'express';
import { create, get, list, remove, search, update } from '../controllers/product';
import { userById } from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth';

const router = Router();

router.get('/products',  list);
router.get('/productSearch',search)
router.post('/products/:userId', requireSignin, isAuth, isAdmin,create);
router.get('/product/:id', checkAuth, get);
router.delete('/product/:id/:userId',requireSignin, isAuth, isAdmin, checkAuth, remove);
router.put('/product/:id/:userId',requireSignin, isAuth, isAdmin, checkAuth, update);

router.param("userId", userById);
export default router;