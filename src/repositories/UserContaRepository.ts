import { IUserConta } from "../interfaces/IUserConta";
import { UserConta } from "../entities/userConta";

export default class UserContaRepository{
    async findAll(){
        return await UserConta.findAll();
    }
    async findById(id: number){
        return await UserConta.findByPk(id);
    }   
    async create(userConta: IUserConta){
        return await UserConta.create({
            id: userConta.id,
            id_usuario: userConta.id_usuario,
            id_conta: userConta.id_conta,
            role: userConta.role
        });
    }
    async update(userConta: IUserConta){
        return await UserConta.update(userConta, {
            where: {
                id: userConta.id
            }
        });
    }
    async Delete(id: number){
        return await UserConta.destroy({
            where: {
                id: id
            }
        });
    }
}