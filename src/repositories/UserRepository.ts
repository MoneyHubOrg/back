import { IUser } from "../interfaces/IUser";
import {Usuario} from "../entities/user"

export default class UserRepository{
    async findAll(){
        return await Usuario.findAll();
    }
    async findById(id: number){
        return await Usuario.findByPk(id);
    }   
    async create(user: IUser){
        return await Usuario.create({
            id: user.id,
            nome: user.nome,
            cpf: user.cpf,
            email: user.email,
            senha: user.senha,
            status_usuario: user.status_usuario,
            createdAt: user.createdAt,
            updatedAt: new Date()
        });
    }
    async update(user: IUser){
        return await Usuario.update(user, {
            where: {
                id: user.id
            }
        });
    }
    async Delete(id: number){
        return await Usuario.destroy({
            where: {
                id: id
            }
        });
    }
}