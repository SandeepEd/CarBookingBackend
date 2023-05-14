import { checkOutRepo } from "../../../../modules/checkout/repo";
import { DeleteCheckOutItemUseCase } from "./useCase";
import { DeleteCheckOutItemController } from "./controller";

const deleteCheckoutItemUseCase = new DeleteCheckOutItemUseCase(checkOutRepo);
const deleteCheckoutItemController = new DeleteCheckOutItemController(deleteCheckoutItemUseCase);

export { deleteCheckoutItemController }