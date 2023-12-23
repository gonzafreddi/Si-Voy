import { DataTypes, Model, Sequelize, UUIDV4 } from "sequelize";

export const defineProvince = (sequelize)=>{
    const Province = sequelize.define('Province',{
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    return Province
}