import { checkOutRepo } from "../../../../modules/checkout/repo";
import { GetCheckoutItemsUseCase } from "./useCase";
import { GetCheckoutItemsController } from "./controller";


const getCheckoutItemsUseCase = new GetCheckoutItemsUseCase(checkOutRepo);
const getCheckoutItemsController = new GetCheckoutItemsController(getCheckoutItemsUseCase);

export { getCheckoutItemsController }