import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/products/products.route";
import { OrderRoutes } from "./modules/orders/orders.route";
import globalErrorHandler from "./middleware/globalErrorHandler";
import notFound from "./middleware/notFound";

const app = express();

//parsers
app.use(cors());
app.use(express.json());

//routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);


app.get("/", (req: Request, res: Response) => {
  res.send("Hello Brother");
});

//
app.use(globalErrorHandler);
app.use(notFound);


export default app;
