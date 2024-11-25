import express from 'express';
import { productControllers } from './bikes.controller';
const router = express.Router();

router.post('/createProduct', productControllers.createProduct);
router.get('/', productControllers.getAllProducts);
router.get('/', productControllers.getAllBikesBySearch);

export const productRoutes = router;
