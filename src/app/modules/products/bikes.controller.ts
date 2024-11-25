import { Request, Response } from 'express';
import { productServices } from './bikes.services';

// create product controller
const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    // will call service function
    const result = await productServices.createProductIntoDB(payload);

    //success response
    res.status(200).json({
      message: 'Bike created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// get all products controller
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const allbikes = await productServices.getAllProductsFromDB();
    res.status(200).json({
      message: 'Bikes retrieved successfully',
      status: true,
      data: allbikes,
    });
  } catch (err) {
    console.log(err);
  }
};

// get all products  controller by search query
const getAllBikesBySearch = async (req: Request, res: Response) => {
  try {
    const searchTerm = (await req.query.searchTerm) as string;
    res.status(200).json({
      message: 'Bikes retrieved successfully',
      status: true,
      data: searchTerm,
    });
  } catch (err) {
    console.log(err);
  }
};
export const productControllers = {
  createProduct,
  getAllProducts,
  getAllBikesBySearch,
};
