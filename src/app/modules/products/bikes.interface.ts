import { Model } from 'mongoose';

export interface Product {
  name: string;
  brand: string;
  price: number;
  category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric'; // Type of bike(enum)
  description?: string;
  quantity: number;
  inStock: boolean;
}

// creating exixting product instance

// export interface ProductStaticModel extends Model<Product> {
//   isUserExists(id: string): Promise<Product | null>;
// }
