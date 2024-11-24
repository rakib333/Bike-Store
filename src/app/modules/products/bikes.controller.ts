import { Request, Response } from 'express';
import { productServices } from './bikes.services';

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

export const productControllers = {
  createProduct,
};
