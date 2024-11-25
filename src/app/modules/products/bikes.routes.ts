import express from 'express';
import { productControllers } from './bikes.controller';
const router = express.Router();

router.post('/createProduct', productControllers.createProduct);
router.get('/', productControllers.getAllProducts);
router.get('/', productControllers.getAllBikesBySearch);
router.get('/:id', productControllers.getAsingleBikeById);
router.put('/:id', productControllers.updateAProduct);
router.delete('/:id', productControllers.deleteProduct);

export const productRoutes = router;
