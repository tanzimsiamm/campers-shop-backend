import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/products/products.route";

const app = express();

//parsers
app.use(cors());
app.use(express.json());

//routes
app.use('/api/products', ProductRoutes);


app.get("/", (req: Request, res: Response) => {
  res.send("Hello Brother");
});


export default app;
