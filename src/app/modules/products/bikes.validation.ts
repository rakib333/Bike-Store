import { z } from 'zod';

const productValidationSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  brand: z.string().min(1, 'Brand is required.'),
  price: z.number().nonnegative('price should not be negetive.'),
  category: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']),
  description: z.string().optional(),
  quantity: z
    .number()
    .int()
    .nonnegative('Quantity must be a non-negative integer.'),
  inStock: z.boolean(),
});

export default productValidationSchema;
