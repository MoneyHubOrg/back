import { ICategoria } from "../interfaces/ICategoria";
import { Categoria } from "../entities/categoria";

export default class CategoriaRepository{
    async findAll(){
        return await Categoria.findAll();
    }
    async findById(id: number){
        return await Categoria.findByPk(id);
    }   
    async create(categoria: ICategoria){
        return await Categoria.create({
            id: categoria.id,
            nome: categoria.nome
        });
    }
    async update(categoria: ICategoria){
        return await Categoria.update(categoria, {
            where: {
                id: categoria.id
            }
        });
    }
    async Delete(id: number){
        return await Categoria.destroy({
            where: {
                id: id
            }
        });
    }
}