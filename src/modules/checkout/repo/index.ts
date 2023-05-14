import * as Models from '../../../database/sequelize/models'
import { CheckOutRepo } from './checkOutRepo';

const checkOutRepo = new CheckOutRepo(Models);

export { checkOutRepo }