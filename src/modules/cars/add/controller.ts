import { Request, Response } from "express";
import { AddCarUseCase } from "./useCase";

export class AddCarController {
    constructor(public addCarUseCase: AddCarUseCase) {
        this.handle = this.handle.bind(this);
    }

    async handle(req: Request, res: Response) {
        console.log(req.body)
        console.log(this)
        if (!this) {
            return res.send('No instance')
        }
        console.log(this)
        const car = await this.addCarUseCase.execute(req.body);
        res.send(car);
    }
}