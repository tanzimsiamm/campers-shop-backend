import { model, Schema } from "mongoose";
import { TProduct } from "./products.interface";

const ProductSchema = new Schema<TProduct>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stockQuantity: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    ratings: { type: Number, default: 0 },
    images: [{ type: String }],
    featured: { type: Boolean, default: false },
}, { timestamps: true });


export const ProductModel = model<TProduct>('ProductModel', ProductSchema);