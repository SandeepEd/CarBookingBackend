import express from "express";
import { carBookingRoutes } from "./modules/cars/routes";
import { logInRouter, signUpRouter } from "./modules/auth/routes";
import { ManageRoute } from "./utils/ManageRoute";
import { userRouter } from "./modules/user/routes";
import { checkoutRoute } from "./modules/checkout/routes";
console.log(ManageRoute);

const router = express.Router();
router.use('/cars', ManageRoute, carBookingRoutes);
router.use('/sign-up', signUpRouter)
router.use(`/login`, logInRouter)
router.use('/user', ManageRoute, userRouter)
router.use('/checkout', ManageRoute, checkoutRoute)

export { router }