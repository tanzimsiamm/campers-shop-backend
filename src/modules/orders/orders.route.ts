import express from "express";
import { OrderControllers } from "./orders.controller";
const router = express.Router();

router.post("/", OrderControllers.createOrder);

export const OrderRoutes = router;
