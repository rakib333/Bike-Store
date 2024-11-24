import { model, Schema } from 'mongoose';
import { Product } from './bikes.interface';

const productSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Removes whitespace
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0, // price should not be negetive
    },
    category: {
      type: String,
      required: true,
      enum: ['Mountain', 'Road', 'Hybrid', 'Electric'], // Restricts to specific categories
    },
    description: {
      type: String,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0, // Ensures quantity is non-negative
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  },
);

export const ProductModel = model<Product>('Product', productSchema);
