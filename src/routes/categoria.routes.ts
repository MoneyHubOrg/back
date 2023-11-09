// criando rotas de alerta
import { Router } from 'express';
import CategoriaController from '../controllers/categoriaController';

const categoriaRouter = Router();
const categoriaController = new CategoriaController();

categoriaRouter.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

categoriaRouter.get('/getAll', categoriaController.findAll);
categoriaRouter.get('/getOne/:id', categoriaController.findById);
categoriaRouter.post('/create', categoriaController.save);
categoriaRouter.put('/update', categoriaController.update);
categoriaRouter.delete('/delete/:id', categoriaController.Delete);

export default categoriaRouter;