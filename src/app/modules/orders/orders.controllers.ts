import { Request, Response } from 'express';
import { Schema } from 'mongoose';
import { ProductModel } from '../products/bikes.model';
import { orderModel } from './orders.model';

const createOrder = async (req: Request, res: Response) => {
  const { email, product, quantity } = req.body;

  try {
    const bike = await ProductModel.findById(product);
    if (!bike || bike.quantity < quantity) {
      return res.status(400).json({
        message: 'Insufficient stock',
        success: false,
      });
    }

    const totalPrice = bike.price * quantity;
    const order = await orderModel.create({
      email,
      product,
      quantity,
      totalPrice,
    });

    bike.quantity -= quantity;
    bike.inStock = bike.quantity > 0;
    await bike.save();

    res.status(201).json({
      message: 'Order created successfully',
      success: true,
      data: order,
    });
  } catch (err) {
    res.status(400).json({
      message: 'Order creation failed',
      success: false,
      error: err,
    });
  }
};

export const orderController = {
  createOrder,
};
