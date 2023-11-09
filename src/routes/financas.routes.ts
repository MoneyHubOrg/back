// criando rotas de alerta
import { Router } from 'express';
import FinanciasController from '../controllers/financiasController';

const financiasRouter = Router();
const financiasController = new FinanciasController();

financiasRouter.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

financiasRouter.get('/getAll', financiasController.findAll);
financiasRouter.get('/getOne/:id', financiasController.findById);
financiasRouter.post('/create', financiasController.save);
financiasRouter.put('/update', financiasController.update);
financiasRouter.delete('/delete/:id', financiasController.Delete);

export default financiasRouter;