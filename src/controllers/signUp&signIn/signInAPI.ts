import { Request, Response } from "express";
import { AppDataSource } from "../../postgres/database";
import { User } from "../../postgres/entity/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "../../config/dotenv";

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

  const payload = {
    email: existingUser.email,
    role: existingUser.type, // Adding the user's role to the JWT payload
    firstName: existingUser.firstName,
    lastName: existingUser.lastName,
  };

  const SECRET_KEY = process.env.JWT_SECRET_KEY || "hello this is SECRET_KEY";
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "5h" });
  res.json({ token });
};
