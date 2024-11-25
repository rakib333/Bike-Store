import express, { Application } from 'express';
import cors from 'cors';
import { productRoutes } from './app/modules/products/bikes.routes';
import { orderRoutes } from './app/modules/orders/order.routes';
const app: Application = express();
// const port = 3000;

// parser
app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// console.log(process.cwd());

export default app;
