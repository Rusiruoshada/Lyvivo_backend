import { Request, Response } from "express";
import Product from "../mongoDB/models/product";
import { User } from "../postgres/entity/User";
import { AppDataSource } from "../postgres/database";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Stripe from "stripe";

import "../config/dotenv";
import { error } from "console";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-10-28.acacia",
});

/**
 * GET /
 * Home page.
 */
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

export const registerUser = async (
  req: Request,
  res: Response
): Promise<any> => {
  const {
    firstName,
    lastName,
    email,
    mobileNumber,
    password,
    confirmPassword,
  } = req.body;

  const trimmedEmail = email.trim().toLowerCase();

  const userRepository = AppDataSource.getRepository(User);
  const existingUser = await userRepository.findOneBy({ email: trimmedEmail });

  if (existingUser) {
    return res.status(403).json({ message: "User already exists." });
  }

  if (password !== confirmPassword) {
    return res
      .status(404)
      .json({ message: "Your confirm password is don't match" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = userRepository.create({
    firstName,
    lastName,
    email,
    mobileNumber,
    password: hashedPassword,
  });

  try {
    await userRepository.save(user);
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Error saving user" });
  }
};

export const login = async (req: Request, res: Response): Promise<any> => {
  const { username: email, password } = req.body;

  const emailTrimmed = email.trim().toLowerCase();

  const userRepository = AppDataSource.getRepository(User);
  const existingUser = await userRepository.findOneBy({ email: emailTrimmed });

  if (!existingUser) {
    return res.status(403).json({ message: "User dose not exist" });
  }

  const hashPasswordCompare = await bcrypt.compare(
    password,
    existingUser.password
  );

  if (!hashPasswordCompare) {
    return res.status(404).json({ message: "Invalid Username or Password!" });
  }

  const SECRET_KEY = process.env.JWT_SECRET_KEY || "hello this is SECRET_KEY";
  const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "5h" });
  res.json({ token });
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
      amount: amountInCents,
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
