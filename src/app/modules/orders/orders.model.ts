import { model, Schema } from 'mongoose';
import { Order } from './orders.interface';

const orderSchema = new Schema<Order>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: true,
      min: [0, 'Total price must be a positive number'],
    },
  },
  { timestamps: true },
);

export const orderModel = model<Order>('order', orderSchema);
