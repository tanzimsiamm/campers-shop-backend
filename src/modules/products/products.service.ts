import { SortOrder } from "mongoose";
import { TProduct, TProductsQuery } from "./products.interface";
import { ProductModel } from "./products.model";


const createProductIntoDB = async (payload: TProduct) => {
    const result = await ProductModel.create(payload);
    return result;
};

const getAllProductsFromDB = async (query: TProductsQuery) => {
    const filter: Record<string, unknown> = {};

    // Add search value to filter if provided
    if (query.searchValue) {
        filter.$or = [
            { product_name: { $regex: query.searchValue, $options: 'i' } },
            { description: { $regex: query.searchValue, $options: 'i' } }
        ];
    }

    // Add category to filter if provided
    if (query.category) {
        filter.category = query.category;
    }

    // Add price range to filter if provided
    if (query.priceRange) {
        const [startingPrice, endingPrice] = query.priceRange.split('-').map(Number);
        filter.price = { $gte: startingPrice, $lte: endingPrice };
    }

    // Set sort option based on sortByPrice if provided
    const sortOption: { [key: string]: SortOrder } = {};

    if (query.sortByPrice) {
        const priceSort = Number(query.sortByPrice);

        // Ensure the value is either 1 (ascending) or -1 (descending)
        if (priceSort === 1 || priceSort === -1) {
            sortOption.price = priceSort;
        } else {
            throw new Error('Invalid sort option for price');
        }
    }

    const products = await ProductModel.find(filter).sort(sortOption);
    return products;
};

const getSingleProductFromDB = async (productId: string) => {
    const result = await ProductModel.findById(productId)
    return result;
};

const getBestSellingProductsFromDB = async () => {
    const result = await ProductModel.find().sort({ rating: -1 }).limit(8);
    return result;
};

const getFeaturedProductsFromDB = async () => {
    const result = await ProductModel.find().sort({ createdAt: -1 }).limit(8);
    return result;
};

const updateProductIntoDB = async (productId: string, payload: Partial<TProduct>) => {
    const result = await ProductModel.findByIdAndUpdate(productId, payload, { new: true })
    return result;
};

const deleteProductFromDB = async (productId: string) => {
    const result = await ProductModel.findByIdAndDelete(productId)
    return result;
};


export const ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    getBestSellingProductsFromDB,
    getFeaturedProductsFromDB,
    updateProductIntoDB,
    deleteProductFromDB,
};

