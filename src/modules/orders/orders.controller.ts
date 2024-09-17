import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsynch";
import { OrderServices } from "./orders.service";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";


const createOrder = catchAsync(async (req: Request, res: Response) => {
    const orderData = req.body;
    const result = await OrderServices.createOrderIntoDB(orderData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order is created succesfully',
        data: result,
    });
})
export const OrderControllers = {
    createOrder,
};
