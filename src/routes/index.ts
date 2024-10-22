import { Router } from "express";
import * as controller from "../controllers/index";

export const router = Router();

router.get("/", controller.index);

router.get("/api/homepageProduct", controller.homepageProduct);

router.get("/api/product/:id", controller.productID);

router.post("/api/register", controller.registerUser)
