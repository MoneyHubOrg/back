import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { Usuario } from './entities/user';
import { Conta } from './entities/conta';
import { conn } from './config/db';
import { UserConta } from './entities/userConta';
import { Financa } from './entities/financas';
import { Categoria } from './entities/categoria';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


(async () => {
  try {
    Usuario.belongsToMany(Conta, { through: UserConta, foreignKey: 'id_usuario' });
    Usuario.hasMany(Financa, { foreignKey: 'id_usuario' });
    Conta.belongsToMany(Usuario, { through: UserConta, foreignKey: 'id_conta' });
    Conta.hasMany(Financa, { foreignKey: 'id_conta' });
    UserConta.belongsTo(Usuario, { foreignKey: 'id_usuario' });
    UserConta.belongsTo(Conta, { foreignKey: 'id_conta' });
    Financa.belongsTo(Usuario, { foreignKey: 'id_usuario' });
    Financa.belongsTo(Conta, { foreignKey: 'id_conta' });
    Categoria.hasMany(Financa, { foreignKey: 'id_categoria' });
    Financa.belongsTo(Categoria, { foreignKey: 'id_categoria' });
    await conn.sync({ alter: true});
    console.log('Sincronizado com sucesso.');
  } catch (error) {
    console.error('Erro ao sincronizar:', error);
  }
})();


// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});