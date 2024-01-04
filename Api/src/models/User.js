import { DataTypes, Model, Sequelize, UUIDV4 } from "sequelize";

export const defineUser = (sequelize)=>{
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true, 
            },
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        premiun:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        admin:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
})
    return User
}