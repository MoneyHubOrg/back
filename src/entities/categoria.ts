import { DataTypes } from "sequelize";
import { conn } from "../config/db";

export const Categoria = conn.define('categorias', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})