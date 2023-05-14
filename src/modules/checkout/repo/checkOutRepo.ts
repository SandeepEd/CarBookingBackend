import { ICheckOutRepo } from "./checkOut";
import * as models from "../../../database/sequelize/models";
import { ICheckOut } from "../../../database/sequelize/models/checkOut";

export class CheckOutRepo implements ICheckOutRepo {
    constructor(private sqlModels: typeof models) { }

    async getCheckoutItems(userId: number): Promise<ICheckOut[]> {
        const { CheckOutModel } = this.sqlModels;
        const checkoutCars = await CheckOutModel.findAll(
            {
                where: { userId },
                include: [
                    CheckOutModel.CarAssociation,
                ]
            });
        const checkoutCarsData = checkoutCars.map((car: any) => car.get());
        return checkoutCarsData;
    }

    async updateCar(id: number, data: ICheckOut): Promise<any> {
        const { CheckOutModel } = this.sqlModels;
        const [updatedRecords] = await CheckOutModel.update(data, { where: { id } });
        return updatedRecords;
    }

    async createCheckout(data: Omit<ICheckOut, 'id'>): Promise<any> {
        const { CheckOutModel } = this.sqlModels;
        console.log(`date for checkoing out :::`, data);
        const createdCheckout = await CheckOutModel.create(data);
        return createdCheckout;
    }

    async getCheckOutByCarId(id: number): Promise<ICheckOut> {
        const { CheckOutModel } = this.sqlModels;
        const checkout = await CheckOutModel.findOne({ where: { carId: id } });
        const checkoutData = checkout?.get();
        return checkoutData;
    }

    async deleteCheckoutItem(id: number): Promise<any> {
        const { CheckOutModel } = this.sqlModels;
        const deletedItem = await CheckOutModel.destroy({ where: { id } });
        return deletedItem;
    }
}