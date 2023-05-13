import { ICarRecord } from "database/sequelize/models/carRecord";

export interface ICarRepository {
    addCar(car: Omit<ICarRecord, 'id'>): Promise<ICarRecord>;
    getCars(): Promise<ICarRecord[]>;
}