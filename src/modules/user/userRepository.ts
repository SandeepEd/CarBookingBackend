import { IUser, IUserRepo } from "./IUserRepo";
import * as Models from "../../database/sequelize/models"

export class UserRepository implements IUserRepo {
    constructor(private models: typeof Models) { }

    public createUser(user: IUser) {
        const { UserModel } = this.models;
        const createdUser = UserModel.create(user);
        return createdUser;
    }
}