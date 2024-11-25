import { Schema } from 'mongoose';

export interface Order {
  email: string;
  product: Schema.Types.ObjectId;
  quantity: Number;
  totalPrice: Number;
}
