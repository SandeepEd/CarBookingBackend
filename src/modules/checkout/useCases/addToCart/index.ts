import { checkOutRepo } from "../../../../modules/checkout/repo";
import { AddToCartController } from "./controller";
import { AddToCartUseCase } from "./useCase";


const addToCartUseCase = new AddToCartUseCase(checkOutRepo)
const addToCartController = new AddToCartController(addToCartUseCase)

export { addToCartController }