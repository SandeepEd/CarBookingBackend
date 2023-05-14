import { Association, DataTypes, Model } from "sequelize";
import { CarRecordsModel, ICarRecord } from "./carRecord";
import { UserModel } from "./user";
import sequelize from "..";

export interface ICheckOut {
    id: number;
    carId: number;
    userId: number;
    quantity: number;
    car?: ICarRecord;
}

export class CheckOutModel extends Model implements ICheckOut {
    declare id: number;
    declare carId: number;
    declare userId: number;
    declare quantity: number;
    declare car: ICarRecord;

    static CarAssociation: Association<CheckOutModel, CarRecordsModel>;
    static UserAssociation: Association<CheckOutModel, UserModel>;

    static associate() {
        this.CarAssociation = this.belongsTo(CarRecordsModel, {
            foreignKey: 'carId',
            as: 'car'
        });

        CheckOutModel.UserAssociation = this.belongsTo(UserModel, {
            foreignKey: 'userId',
            as: 'user'
        });
    }
}

CheckOutModel.init({
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        autoIncrementIdentity: true,
        primaryKey: true
    },
    carId: {
        field: 'car_id',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        field: 'quantity',
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    tableName: 'check_out',
    modelName: 'check_out',
    schema: `checkOut`,
    paranoid: true,
    timestamps: false
})