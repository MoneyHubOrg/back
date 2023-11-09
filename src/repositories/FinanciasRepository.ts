import { IFinancias } from "../interfaces/IFinancias";
import { Financa } from "../entities/financas";

export default class FinanciasRepository{
    async findAll(){
        return await Financa.findAll();
    }
    async findById(id: number){
        return await Financa.findByPk(id);
    }   
    async create(financias: IFinancias){
        return await Financa.create({
            id: financias.id,
            id_conta: financias.id_conta,
            id_usuario: financias.id_usuario,
            id_categoria: financias.id_categoria,
            valor: financias.valor,
            descricao: financias.descricao,
            data: financias.data,
            createdAt: financias.createdAt,
            updatedAt: new Date()
        });
    }
    async update(financias: IFinancias){
        return await Financa.update(financias, {
            where: {
                id: financias.id
            }
        });
    }
    async Delete(id: number){
        return await Financa.destroy({
            where: {
                id: id
            }
        });
    }
}