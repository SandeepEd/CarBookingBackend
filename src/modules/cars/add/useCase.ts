import { ICarRecord } from "../../../database/sequelize/models/carRecord";
import { IUseCase } from "../../../shared/IUseCase";
import { ICarRepository } from "../repo/carRepositoryRepo";

export class AddCarUseCase implements IUseCase<ICarRecord, ICarRecord> {
    constructor(private carRepository: ICarRepository) { }
    async execute(input: ICarRecord): Promise<ICarRecord> {
        const car = await this.carRepository.addCar(input);
        return car
    }
}