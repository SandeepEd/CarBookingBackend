import { Model, DataTypes } from "sequelize";
import sequelize from "..";

export interface ICarRecord {
    id: number;
    name: string;
    price: number;
    imageSrc?: string;
}

export class CarRecordsModel extends Model<ICarRecord, Omit<ICarRecord, 'id'>> implements ICarRecord {
    declare id: number;
    declare name: string;
    declare price: number;
}

CarRecordsModel.init({
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        autoIncrementIdentity: true,
        primaryKey: true
    },
    name: {
        field: 'name',
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        field: 'price',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imageSrc: {
        field: 'imageSrc',
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'CARS',
    modelName: 'CARS',
    schema: `CarRecords`,
    sequelize,
    paranoid: true,
    timestamps: false
})
