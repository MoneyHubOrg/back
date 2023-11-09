import { IConta } from "../interfaces/IConta";
import { Conta } from "../entities/conta";

export default class ContaRepository{
    async findAll(){
        return await Conta.findAll();
    }
    async findById(id: number){
        return await Conta.findByPk(id);
    }   
    async create(conta: IConta){
        return await Conta.create({
            id: conta.id,
            status_compra: conta.status_conta,
            createdAt: conta.createdAt,
            updatedAt: new Date()
        });
    }
    async update(conta: IConta){
        return await Conta.update(conta, {
            where: {
                id: conta.id
            }
        });
    }
    async Delete(id: number){
        return await Conta.destroy({
            where: {
                id: id
            }
        });
    }
}