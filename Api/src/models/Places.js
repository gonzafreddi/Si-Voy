import { DataTypes, UUIDV4 } from "sequelize";

export const definePlaces = (sequelize)=>{
    const Places = sequelize.define('Places',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        name:{
            type: DataTypes.STRING, 
            allowNull: false
        },
        profileImage:{
            type: DataTypes.STRING, 
            allowNull: true
        },
        web:{
            type: DataTypes.STRING, 
            allowNull: true
        },
        phone:{
            type: DataTypes.STRING, 
            allowNull: true
        },
        facebook:{
            type: DataTypes.STRING, 
            allowNull: true
        },
        isPublic:{
            type: DataTypes.BOOLEAN, 
            allowNull: false
        },
        whatsapp:{
            type: DataTypes.STRING, 
            allowNull: true
        },
        email:{
            type: DataTypes.STRING, 
            allowNull: true
        },
        linkMapa:{
            type: DataTypes.STRING, 
            allowNull: true 
        },
        mapaFrame:{
            type: DataTypes.STRING, 
            allowNull: true
        },
        average:{
            type: DataTypes.FLOAT, 
            allowNull: true
        }
    })
    return Places
}