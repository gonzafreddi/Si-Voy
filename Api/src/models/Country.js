import { DataTypes, UUIDV4 } from "sequelize";

export const defineCountry = (sequelize)=>{
    const Country = sequelize.define('Country',{
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
    return Country
}