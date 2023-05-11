import { Request, Response } from "express";
import { GetCarsUseCase } from "./useCase";

export class GetCarsController {
    constructor(private readonly getCarsUseCase: GetCarsUseCase) {
        this.handle = this.handle.bind(this);
    }
    async handle(req: Request, res: Response) {
        const data = await this.getCarsUseCase.execute();
        res.status(200).json(data);
    }
}