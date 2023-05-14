import { ICheckOutRepo } from "../../../../modules/checkout/repo/checkOut";
import { IUseCase } from "../../../../shared/IUseCase";

export class AddToCartUseCase implements IUseCase<any, any>{
    constructor(private checkOutRepo: ICheckOutRepo) {

    }

    async execute(input: { carId: number, userId: number }): Promise<any> {
        const checkOutItem = await this.checkOutRepo.getCheckOutByCarId(input.carId);
        console.log(`checkOutItem :::`, input.carId, checkOutItem);
        if (checkOutItem) {
            const updatedItem = await this.checkOutRepo.updateCar(checkOutItem.id, {
                carId: input.carId,
                userId: input.userId,
                quantity: checkOutItem.quantity + 1
            });
            return updatedItem;
        }
        const car = await this.checkOutRepo.createCheckout({
            carId: input.carId,
            userId: input.userId,
            quantity: 1
        });
        return car
    }
}