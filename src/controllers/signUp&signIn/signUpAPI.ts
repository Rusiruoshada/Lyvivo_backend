import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../postgres/database";
import { User } from "../../postgres/entity/User";
import "../../config/dotenv";

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
