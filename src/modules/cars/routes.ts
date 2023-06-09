import express from "express";
import { addCarController } from "./add/index";
import { getCarsController } from "./getCars";

const carBookingRoutes = express.Router()

carBookingRoutes.post('/add-car', addCarController.handleController);
carBookingRoutes.get('/', getCarsController.handleController);

export { carBookingRoutes }