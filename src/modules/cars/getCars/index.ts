import { CarRecordsModel } from "../../../database/sequelize/models";
import { GetCarsController } from "./controller";
import { GetCarsUseCase } from "./useCase";

const getCarsUseCase = new GetCarsUseCase(CarRecordsModel);
const getCarsController = new GetCarsController(getCarsUseCase);

export { getCarsController }
