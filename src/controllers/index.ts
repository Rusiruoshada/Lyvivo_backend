import { Request, Response } from "express";
import Product from "../mongoDB/models/product";
import { User } from "../postgres/entity/User";
import { AppDataSource } from "../postgres/database";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Stripe from "stripe";
import nodemailer from "nodemailer";
import "../config/dotenv";

//const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
 // apiVersion: "2024-10-28.acacia",
//});

const stripe = require("stripe")(
  process.env.STRIPE_SECRET_KEY! // check if the env is working
);

export const index = async (req: Request, res: Response): Promise<void> => {
  res.render("index", { title: "Express" });
};

export const homepageProduct = async (
  req: Request,
  res: Response
): Promise<any> => {
  const category = {
    show: "Grocery",
    show1: "Best Savings",
    show2: "Electronics",
  };

  try {
    const grocery = await Product.find({ category: category.show });
    if (!grocery) {
      return res.status(500).json({ message: "Server unavailable now!" });
    }
    const bestSavings = await Product.find({ category: category.show1 });
    if (!bestSavings) {
      return res.status(500).json({ message: "Server unavailable now!" });
    }
    const Electronics = await Product.find({ category: category.show2 });
    if (!Electronics) {
      return res.status(500).json({ message: "Server unavailable now!" });
    }

    res.json(grocery);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const productID = async (req: Request, res: Response): Promise<any> => {
  const productId = req.params.id;

  try {
    const productItem = await Product.findById(productId);

    if (!productItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(productItem);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};



export const checkout = async (req: Request, res: Response): Promise<any> => {
  try {
    const { amount } = req.body; // amount should be passed in cents
    parseFloat(amount);
    const amountInCents = Math.round(amount * 1000);

    if (amountInCents <= 0) {
      return res.status(400).send({
        message: "Add some items to checkout!",
        error: "Amount must be a number and can't be zero!",
      });
    }
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents*0.1,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
    
  } catch (error) {
    console.log("payment error", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};



// export const getAllProductData = async (req: Request, res: Response): Promise<any> => {
//   try {
//     const data = await Product.find()
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

// // use aws and modify this
// export const addNewProduct = async (req: Request, res: Response): Promise<any> => {
//   console.log(req.body)
//   console.log('hit the upload');
// }

