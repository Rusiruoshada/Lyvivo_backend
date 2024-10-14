import express from "express";
// import logger from "morgan";
import * as path from "path";
import cors from 'cors';
import './config/dotenv'

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";
import mongoose from "mongoose";
// Create Express server
export const app = express();

// mongoDB connect
const URL = process.env.MONGODB_URL as string

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(URL);
        console.log('MongoDB Connected Successfully!')
    } catch (error) {
        console.log('Error with connecting MongoDB', error)
    }
}

connectDB();

// Express configuration
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))

// app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", index);

app.use(errorNotFoundHandler);
app.use(errorHandler);