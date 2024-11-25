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

// Get a Specific Bike by id
const getAsingleBikeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const getSingleBike = await productServices.getAsingleBike(id);
    res.status(200).json({
      message: 'Bike retrieved successfully',
      status: true,
      data: getSingleBike,
    });
  } catch (err) {
    console.log(err);
  }
};

// update a product
const updateAProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;

  const result = await productServices.updateProduct(id, payload);
  res.status(200).json({
    message: 'Data updated successfully',
    status: true,
    data: result,
  });
};

// delete a product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await productServices.deleteProduct(id);

    res.status(200).json({
      status: true,
      message: 'Bike deleted successfully',
      data: {},
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

export const productControllers = {
  createProduct,
  getAllProducts,
  getAllBikesBySearch,
  getAsingleBikeById,
  updateAProduct,
  deleteProduct,
};
