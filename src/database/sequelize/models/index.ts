import { CarRecordsModel } from "./carRecord";
import { UserModel } from "./user";
import { CheckOutModel } from "./checkOut";

CheckOutModel.associate();

export { CarRecordsModel, UserModel, CheckOutModel }