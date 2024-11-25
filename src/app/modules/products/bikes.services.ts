import { Request, Response } from 'express';
import { Product } from './bikes.interface';
import { ProductModel } from './bikes.model';

// create product functionality
const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

// getAllProducts functionality
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

// get all products by search query
const getAllProductsBySearch = async (searchTerm: string) => {
  const matchStage = searchTerm
    ? {
        $match: {
          $or: [
            { name: { $regex: searchTerm, $options: 'i' } },
            { brand: { $regex: searchTerm, $options: 'i' } },
            { category: { $regex: searchTerm, $options: 'i' } },
          ],
        },
      }
    : { $match: {} }; // No filtering if searchTerm is not provided

  const bikes = await ProductModel.aggregate([matchStage]);
  return bikes;
};

//Get a Specific Bike
const getAsingleBike = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

// update a product
const updateProduct = async (id: string, data: Product) => {
  const result = await ProductModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

// delete a product
const deleteProduct = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getAllProductsBySearch,
  getAsingleBike,
  updateProduct,
  deleteProduct,
};
