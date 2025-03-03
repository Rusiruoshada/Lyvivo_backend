import { Request, Response } from "express";
import jwt from "jsonwebtoken";

// Middleware to check if the user is an admin
const authenticateJWT = (req: Request, res: Response, next: any) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const SECRET_KEY = process.env.JWT_SECRET_KEY || "hello this is SECRET_KEY";

  try {
    // Verify the token and decode it
    const decoded: any = jwt.verify(token, SECRET_KEY);

    

    // Check if the user's role is admin
    if (decoded.role !== "admin" && decoded.role !== "super_admin") {
      return res.status(403).json({ message: "Forbidden" });
    }

    // If user is authorized, move to the next middleware
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authenticateJWT;