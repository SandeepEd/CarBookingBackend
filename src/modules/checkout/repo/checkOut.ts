import { ICheckOut } from "../../../database/sequelize/models/checkOut";

export interface ICheckOutRepo {
    getCheckoutCars(): Promise<ICheckOut[]>;
    updateCar(id: number, data: Omit<ICheckOut, 'id'>): Promise<any>;
    createCheckout(data: Omit<ICheckOut, 'id'>): Promise<any>;
    getCheckOutByCarId(id: number): Promise<ICheckOut>;
    deleteCheckoutItem(id: number): Promise<any>;
}