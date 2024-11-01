import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import '../config/dotenv';


export const authenticateJWT = (req:Request, res:Response, next:NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) return res.sendStatus(403);
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'hello this is SECRET_KEY';
    
    jwt.verify(token, JWT_SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.body = user;
        next();
    })


}