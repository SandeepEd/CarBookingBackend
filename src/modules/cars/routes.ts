import express from "express";
import { addCarController } from "./add/index";
import { getCarsController } from "./getCars";

const carBookingRoutes = express.Router()

carBookingRoutes.post('/', addCarController.handle);
carBookingRoutes.get('/', getCarsController.handle);

export { carBookingRoutes }