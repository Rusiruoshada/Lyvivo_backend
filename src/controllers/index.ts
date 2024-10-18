import { Request, Response } from "express";
import Product from "../mongoDB/models/product";
import { User } from '../postgres/entity/User';
import { AppDataSource } from '../postgres/database';
import bcrypt from 'bcryptjs';
/**
 * GET /
 * Home page.
 */
export const index = async (req: Request, res: Response): Promise<void> => {
    res.render("index", { title: "Express" });
};

export const homepageProduct = async (req: Request, res: Response): Promise<any> => {
    const category = {show: 'Grocery', show1: 'Best Savings', show2: 'Electronics'}

    try{
        const grocery = await Product.find({category:category.show});
        if (!grocery) {
            return res.status(500).json({ message: 'Server unavailable now!' });
        }
        const bestSavings = await Product.find({category:category.show1});
        if (!bestSavings) {
            return res.status(500).json({ message: 'Server unavailable now!' });
        }
        const Electronics = await Product.find({category:category.show2});
        if (!Electronics) {
            return res.status(500).json({ message: 'Server unavailable now!' });
        }


        res.json(grocery);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error!' });
    }
}

export const productID = async (req: Request, res: Response): Promise<any> => {
    const productId = req.params.id;

    try{
        const productItem = await Product.findById(productId);

        if(!productItem){
            return res.status(404).json({ message: 'Item not found' })
        };
        res.status(200).json(productItem);
    }catch (error) {
        res.status(500).json({message: 'Server Error' })
    }
}



