import express from "express";
import { ProductControllers } from "./products.controller";
const router = express.Router();


router.post("/", ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProducts);
//
router.get("/best-selling-products", ProductControllers.getBestSellingProducts);
router.get("/featured-products", ProductControllers.getFeaturedProducts);
router.get("/:productId", ProductControllers.getSingleProduct);
router.patch("/:productId", ProductControllers.updateProduct);
router.delete("/:productId", ProductControllers.deleteProduct);

export const ProductRoutes = router;
