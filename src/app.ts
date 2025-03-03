import express from "express";
// import logger from "morgan";
import * as path from "path";
import cors from 'cors';
import bodyParser from "body-parser";
import './config/dotenv';
import "reflect-metadata";

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { router } from "./routes/index";
import mongoose from "mongoose";
import { AppDataSource } from "./postgres/database";
// Create Express server
export const app = express();

// mongoDB connect
const URL = process.env.MONGODB_URL as string

const connectDB = async () => {
    try {
        const connectMongoDB = await mongoose.connect(URL);
        const connectPostgreSql = await AppDataSource.initialize();
        console.log(connectMongoDB && connectPostgreSql && `Databases Connected Successfully!`)
    } catch (error) {
        console.log('Error with connecting Database', error)
    }
}

connectDB();

// Express configuration
app.set("port", process.env.PORT || 8080);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))
app.use(bodyParser.json());

// app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", router);

app.use(errorNotFoundHandler);
app.use(errorHandler);