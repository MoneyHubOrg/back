import { Router, Request, Response } from "express";


import categoriaRouter from "./categoria.routes";
import contaRouter from "./conta.routes";
import financiasRouter from "./financas.routes";
import userRouter from "./user.routes";
import userContaRoutes from "./userConta,routes";


const routes = Router();

routes.use("/Categoria", categoriaRouter)
routes.use("/Conta", contaRouter)
routes.use("/Financias", financiasRouter)
routes.use("/User", userRouter)
routes.use("/UserConta", userContaRoutes)


// underscore atua como um espaço reservado para um argumento que desejamos ignorar
routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;