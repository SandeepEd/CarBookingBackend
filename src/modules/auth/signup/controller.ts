import { NextFunction } from "express";
import { BaseController } from "../../../shared/BaseController";
import { IUser } from "../../user/IUserRepo";
import { SignUpUseCase } from "./useCase";

export class SignUpController extends BaseController {
    constructor(private signUpUseCase: SignUpUseCase) {
        super();
    }

    async handleController(req: any, res: any, next: NextFunction) {
        const user = req.body as IUser;
        try {
            const result = this.signUpUseCase.execute(user);
            this.handleResponse(req, res, result)
        } catch (error: any) {
            next(error);
        }
    }
}