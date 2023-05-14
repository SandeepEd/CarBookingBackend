import { ICheckOutRepo } from "modules/checkout/repo/checkOut";

export class GetCheckoutItemsUseCase {
    constructor(private checkOutRepo: ICheckOutRepo) {
    }
    async execute(userId: number) {
        const checkoutItems = await this.checkOutRepo.getCheckoutItems(userId);
        return checkoutItems;
    }
}