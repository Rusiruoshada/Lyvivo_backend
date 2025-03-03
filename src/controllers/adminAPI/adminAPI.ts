import Product from "../../mongoDB/models/product";
import { Request, Response } from "express";
import "../../config/dotenv";

export const getAllProductData = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const data = await Product.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// use aws and modify this
export const addNewProduct = async (
  req: Request,
  res: Response
): Promise<any> => {
  console.log(req.body);
  console.log("hit the upload");
};
