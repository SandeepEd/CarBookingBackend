import { BaseController } from "../../../../shared/BaseController";
import { DeleteCheckOutItemUseCase } from "./useCase";

export class DeleteCheckOutItemController extends BaseController {
    constructor(private deleteCheckOutItemUseCase: DeleteCheckOutItemUseCase) {
        super();
    }
    async handleController(req: any, res: any, next: any) {
        try {
            const { id } = req.params;
            await this.deleteCheckOutItemUseCase.execute(id);
            this.handleResponse(req, res, { message: "Car deleted from cart" });
        }
        catch (error: any) {
            next(error);
        }
    }
}