import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsynch";
import { ProductServices } from "./products.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductServices.createProductIntoDB(productData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is created succesfully',
    data: result,
  });
})

const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductServices.getAllProductsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products is fetched succesfully',
    data: result,
  });
})


const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const result = await ProductServices.getSingleProductFromDB(productId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is fetched succesfully',
    data: result,
  });
})


const getBestSellingProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductServices.getBestSellingProductsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products is fetched succesfully',
    data: result,
  });
})

const getFeaturedProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductServices.getFeaturedProductsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products is fetched succesfully',
    data: result,
  });
})

const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const payload = req.body;
  const result = await ProductServices.updateProductIntoDB(productId, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products is updated succesfully',
    data: result,
  });
})

const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const result = await ProductServices.deleteProductFromDB(productId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is deleted succesfully',
    data: result,
  });
})

export const ProductControllers = {
  createProduct,
   getAllProducts,
   updateProduct,
   deleteProduct,
   getSingleProduct,
   getBestSellingProducts,
   getFeaturedProducts
};
