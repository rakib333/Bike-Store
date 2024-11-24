import { Request, Response } from 'express';
import { Product } from './bikes.interface';
import { ProductModel } from './bikes.model';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

export const productServices = {
  createProductIntoDB,
};
