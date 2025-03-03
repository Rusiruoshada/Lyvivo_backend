import { Request, Response } from "express";
import "../../config/dotenv";
import Product from "../../mongoDB/models/product";

export const productEdit =async (req:Request,res:Response):Promise<any> => {
    
    const productKey = req.body;
    try {
      const productItem = await Product.findById(productKey.productKey);

      if (!productItem) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json(productItem);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" });
    }
}
