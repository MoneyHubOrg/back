import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();


export const conn = new Sequelize(process.env.DB_DATABASE as string, process.env.DB_USERNAME as string, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});


