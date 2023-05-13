import { CarRecordsModel } from "../../../database/sequelize/models";
import { CarRepository } from "./carRepository";

const carRepo = new CarRepository(CarRecordsModel);

export { carRepo }