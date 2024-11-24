import express from 'express';
import { productControllers } from './bikes.controller';
const router = express.Router();

router.post('/createProduct', productControllers.createProduct);

export const productRoutes = router;
