import { Router } from "express";
import { addToCartController } from "./useCases/addToCart";
import { deleteCheckoutItemController } from "./useCases/deleteCart";
import { getCheckoutItemsController } from "./useCases/getFromCart";

const checkoutRoute = Router();

checkoutRoute.post('/add/:carId', addToCartController.handleController);
checkoutRoute.delete('/:id', deleteCheckoutItemController.handleController);
checkoutRoute.get('/', getCheckoutItemsController.handleController);

export { checkoutRoute }