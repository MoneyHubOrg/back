// criando rotas de alerta
import { Router } from 'express';
import ContaController from '../controllers/contaController';

const contaRouter = Router();
const contaController = new ContaController();

contaRouter.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

contaRouter.get('/getAll', contaController.findAll);
contaRouter.get('/getOne/:id', contaController.findById);
contaRouter.post('/create', contaController.save);
contaRouter.put('/update', contaController.update);
contaRouter.delete('/delete/:id', contaController.Delete);

export default contaRouter;