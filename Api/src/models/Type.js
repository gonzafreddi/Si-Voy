import { DataTypes, UUIDV4 } from "sequelize";

export const defineType = (sequelize)=>{
    const Type = sequelize.define('Type',{
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
    return Type
}