import { AddCarUseCase } from './useCase';
import { AddCarController } from './controller';
import { CarRecordsModel } from '../../../database/sequelize/models/index';

const addCarUseCase = new AddCarUseCase(CarRecordsModel);
const addCarController = new AddCarController(addCarUseCase);

export { addCarController }