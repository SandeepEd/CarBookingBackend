import { Request, Response, NextFunction } from "express";
import { BaseController } from "../../../../shared/BaseController";
import { AddToCartUseCase } from "./useCase";

export class AddToCartController extends BaseController {
    constructor(public addToCartUseCase: AddToCartUseCase) {
        super()
    }

    public async handleController(req: any, res: Response, next: NextFunction) {
        try {
            const { carId } = req.params;
            const { id: userId } = req.user;

            await this.addToCartUseCase.execute({ carId, userId });
            this.handleResponse(req, res, { message: "Car added to cart" });
        } catch (error: any) {
            next(error);
        }
    }
}