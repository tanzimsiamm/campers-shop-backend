import AppError from "../../errors/appError";
import { TProduct } from "../products/products.interface";
import { ProductModel } from "../products/products.model";
import { TOrder } from "./orders.interface";
import { OrderModel } from "./orders.model";

const createOrderIntoDB = async (order: TOrder) => {
    const orderedProducts = order.orderedProducts;

    // create a new order 
    const result = await OrderModel.create(order)

    if (result) {
        //  update the stock quantity 
        for (const item of orderedProducts) {
            const product: TProduct | null = await ProductModel.findById(item.productId);
            if (product) {
                product.stockQuantity = item.quantity;
                await ProductModel.findByIdAndUpdate(product._id, product, { new: true })
            } else {
                new AppError(404, 'Product not found')
            }
        }
    }
    return result;
};


export const OrderServices = {
    createOrderIntoDB,
};
