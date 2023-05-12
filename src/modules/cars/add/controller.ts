import { NextFunction, Request, Response } from "express";
import { AddCarUseCase } from "./useCase";
import { BaseController } from "../../../shared/BaseController";

export class AddCarController extends BaseController {
    constructor(public addCarUseCase: AddCarUseCase) {
        super()
    }

    async handleController(req: Request, res: Response, next: NextFunction) {
        try {
            const car = await this.addCarUseCase.execute(req.body);
            this.handleResponse(req, res, car);
        } catch (error: any) {
            next(error);
        }
    }
}