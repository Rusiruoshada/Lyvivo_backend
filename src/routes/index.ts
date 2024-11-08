import { Router } from "express";
import * as controller from "../controllers/index";
import { authenticateJWT } from "../middlewares/authenticateJWT";

export const router = Router();

router.get("/", controller.index);

router.get("/api/homepageProduct", controller.homepageProduct);

router.get("/api/products/:id", controller.productID);

router.post("/api/register", controller.registerUser);

router.post("/api/login", controller.login);

router.post('/api/checkout', controller.checkout)
