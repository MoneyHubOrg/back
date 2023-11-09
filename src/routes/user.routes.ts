// criando rotas de alerta
import { Router } from 'express';
import UserController from '../controllers/userController';


const userRouter = Router();
const userController = new UserController();

userRouter.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

userRouter.get('/getAll', userController.findAll);
userRouter.get('/getOne/:id', userController.findById);
userRouter.post('/create', userController.save);
userRouter.put('/update', userController.update);
userRouter.delete('/delete/:id', userController.Delete);

export default userRouter;