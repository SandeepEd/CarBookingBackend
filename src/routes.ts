import express from "express";
import { carBookingRoutes } from "./modules/cars/routes";

const router = express.Router();
router.use('/cars', carBookingRoutes);

export { router }