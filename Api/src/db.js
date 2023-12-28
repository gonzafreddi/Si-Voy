import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import { defineType } from './models/Type.js';
import { defineCountry } from './models/Country.js';
import { defineProvince } from './models/Province.js';
import { defineUser } from './models/User.js';
import { defineCity } from './models/City.js';
import { definePlaces } from './models/Places.js';

dotenv.config();
const { DB_URL } = process.env;
const sequelize = new Sequelize(`${DB_URL}`, {
  logging: false,
  native: false,
});

defineCity(sequelize)
defineCountry(sequelize)
definePlaces(sequelize)
defineUser(sequelize)
defineProvince(sequelize)
defineType(sequelize)
export const {
    User,
    Country,
    Places,
    Province,
    City,
    Type
} = sequelize.models

const verifyConnection = async () => { 
  try {
    await sequelize.authenticate();
    console.log('Successful connection to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};
verifyConnection();

Country.hasMany(Province)
Province.belongsTo(Country)

Province.hasMany(City)
City.belongsTo(Province)

City.hasMany(Places)
Places.belongsTo(City)

Type.hasMany(Places)
Places.belongsTo(Type)


export const conn = sequelize;
