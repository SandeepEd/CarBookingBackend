import { CarRecordsModel } from "../../../database/sequelize/models/carRecord";
import { IUseCase } from "../../../shared/IUseCase";

export interface ICar {
    name: string;
    price: number;
}
export class AddCarUseCase implements IUseCase<ICar, ICar> {
    constructor(private carRecordModel: typeof CarRecordsModel) { }
    async execute(input: ICar): Promise<ICar> {
        const car = await this.carRecordModel.create(input);
        return car
    }
}