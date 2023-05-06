import { GetCarsUseCase } from "./useCase";

export class GetCarsController {
    constructor(private readonly getCarsUseCase: GetCarsUseCase) {
        this.handle = this.handle.bind(this);
    }
    async handle(req: any, res: any) {
        const data = await this.getCarsUseCase.execute();
        res.status(200).json(data);
    }
}