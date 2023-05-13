import { AddCarUseCase } from './useCase';
import { AddCarController } from './controller';
import { carRepo } from '../repo';

const addCarUseCase = new AddCarUseCase(carRepo);
const addCarController = new AddCarController(addCarUseCase);

export { addCarController }