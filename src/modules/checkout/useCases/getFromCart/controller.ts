import { Request, Response, NextFunction } from "express";
import { BaseController } from "../../../../shared/BaseController";

export class GetCheckoutItemsController extends BaseController {
    constructor(private getCheckoutItemsUseCase: any) {
        super();
    }

    public async handleController(req: any, res: Response, next: NextFunction): Promise<any> {
        try {
            const { id: userId } = req.user;
            const checkoutItems = await this.getCheckoutItemsUseCase.execute(userId);
            this.handleResponse(req, res, checkoutItems);
        } catch (error: any) {
            next(error);
        }
    }
}