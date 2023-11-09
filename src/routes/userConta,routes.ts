// criando rotas de alerta
import { Router } from 'express';
import UserContaController from '../controllers/userContaController';

const userContaRoutes = Router();
const userContaController = new UserContaController();

userContaRoutes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

userContaRoutes.get('/getAll', userContaController.findAll);
userContaRoutes.get('/getOne/:id', userContaController.findById);
userContaRoutes.post('/create', userContaController.save);
userContaRoutes.put('/update', userContaController.update);
userContaRoutes.delete('/delete/:id', userContaController.Delete);

export default userContaRoutes;