import { Router } from "express";
import * as controller from "../controllers/index";
import * as adminAPI from '../controllers/adminAPI/adminAPI';
import * as signIn from '../controllers/signUp&signIn/signInAPI'
import * as signUp from "../controllers/signUp&signIn/signUpAPI";
import * as sendEmail from '../controllers/sendEmailAPI/sendEmailAPI';
import * as productAPI from '../controllers/productAPI/productAPI'
import  authenticateJWT  from "../middlewares/authenticateJWT";

export const router = Router();

router.get("/", controller.index);

router.get("/api/homepageProduct", controller.homepageProduct);

router.get("/api/products/:id", controller.productID);

router.get('/api/getAllProductData', adminAPI.getAllProductData)

router.post("/api/register", signUp.registerUser);

router.post("/api/login", signIn.login);

router.post('/api/checkout', controller.checkout);

router.post('/api/send_email', sendEmail.send_email);

router.post('/api/addNewProduct', adminAPI.addNewProduct)

router.post("/api/productEdit", productAPI.productEdit);