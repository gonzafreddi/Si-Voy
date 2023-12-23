import { DataTypes, UUIDV4 } from "sequelize";

export const defineCity = (sequelize)=>{
    const City = sequelize.define('City',{
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
    return City
}