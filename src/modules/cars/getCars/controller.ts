import { NextFunction, Request, Response } from "express";
import { GetCarsUseCase } from "./useCase";
import { BaseController } from "../../../shared/BaseController";

export class GetCarsController extends BaseController {
    constructor(private readonly getCarsUseCase: GetCarsUseCase) {
        super()
    }
    async handleController(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await this.getCarsUseCase.execute();
            this.handleResponse(req, res, data);
        } catch (error: any) {
            next(error)
        }
    }
}