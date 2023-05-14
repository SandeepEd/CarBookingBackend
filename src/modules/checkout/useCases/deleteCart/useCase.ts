import { ICheckOutRepo } from "../../../../modules/checkout/repo/checkOut";

export class DeleteCheckOutItemUseCase {
    constructor(private checkOutRepo: ICheckOutRepo) {
    }
    async execute(id: number) {
        const checkOut = await this.checkOutRepo.deleteCheckoutItem(id);
        return checkOut;
    }
}