import { Router } from "express";
import { checkAuth } from '../middlewares/checkAuth';
import { create, list, remove, update } from '../controllers/product';

const router = Router();


router.get('/products', checkAuth, list);
router.post('/products', checkAuth, create);
router.get('/product/:id', checkAuth, );
router.delete('/product/:id', checkAuth, remove);
router.put('/product/:id', checkAuth, update);
export default router;