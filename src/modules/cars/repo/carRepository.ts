import { ICarRecord } from "database/sequelize/models/carRecord";
import { ICarRepository } from "./carRepositoryRepo";

export class CarRepository implements ICarRepository {
    constructor(private carRecordModel: any) { }

    async addCar(car: Omit<ICarRecord, 'id'>): Promise<ICarRecord> {
        const carData = await this.carRecordModel.create(car);
        return carData;
    }

    async getCars(): Promise<ICarRecord[]> {
        const cars = await this.carRecordModel.findAll();
        const carsData = cars.map((car: any) => car.get());
        return carsData;
    }
}