import { NextFunction, Request, Response } from "express";
import { BaseController } from "../../../shared/BaseController";
import { LogInUseCase } from "./useCase";

export class LogInController extends BaseController {
    constructor(private logInUseCase: LogInUseCase) {
        super();
    }

    async handleController(req: Request, res: Response, next: NextFunction) {
        const logInDto = req.body as { email: string, password: string };
        try {
            const result = await this.logInUseCase.execute(logInDto);

            this.handleResponse(req, res, result);

        } catch (error: any) {
            next(error);
        }
    }
}