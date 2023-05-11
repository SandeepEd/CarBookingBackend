import { CarRecordsModel } from "../../../database/sequelize/models";
import { ICarRecord } from "../../../database/sequelize/models/carRecord";

export class GetCarsUseCase {
    constructor(private readonly carRecordsModel: typeof CarRecordsModel) {
    }
    async execute(): Promise<ICarRecord[]> {
        const cars = await this.carRecordsModel.findAll();
        const carsData = cars.map((car) => car.get());

        return carsData;
    }
}