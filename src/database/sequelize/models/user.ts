import { DataTypes, Model } from "sequelize";
import { IUser } from "../../../modules/user/IUserRepo";
import sequelize from "..";

export class UserModel extends Model<IUser, Omit<IUser, 'id'>> implements IUser {
    declare id: number;
    declare name: string;
    declare email: string;
    declare password: string;
}

UserModel.init({
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        autoIncrementIdentity: true,
        primaryKey: true,
    },
    name: {
        field: 'name',
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        field: 'email',
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        field: 'password',
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Users',
    modelName: 'Users',
    schema: `CARS`,
    sequelize,
    paranoid: true,
    timestamps: false
})