import express from "express";
import { carBookingRoutes } from "./modules/cars/routes";
import { logInRouter, signUpRouter } from "./modules/auth/routes";

const router = express.Router();
router.use('/cars', carBookingRoutes);
router.use('/sign-up', signUpRouter)
router.use(`/login`, logInRouter)

export { router }