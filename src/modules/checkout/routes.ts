import { Router } from "express";
import { addToCartController } from "./useCases/addToCart";
import { deleteCheckoutItemController } from "./useCases/deleteCart";

const checkoutRoute = Router();

checkoutRoute.post('/:carId', addToCartController.handleController);
checkoutRoute.delete('/:id', deleteCheckoutItemController.handleController);

export { checkoutRoute }