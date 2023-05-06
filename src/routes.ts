import express from "express";
import { carBookingRoutes } from "./modules/cars/routes";
import { signUpRouter } from "./modules/auth/routes";

const router = express.Router();
router.use('/cars', carBookingRoutes);
router.use('/sign-up', signUpRouter)

export { router }