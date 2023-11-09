
import CategoriaRepository from "../repositories/CategoriaRepository";
import { ICategoria } from "../interfaces/ICategoria";
import { Request, Response } from "express";

const categoriaRepository = new CategoriaRepository();
export default class CategoriaController {
    async findAll(Request: Request, Response: Response) {
        try {
            const categorias = await categoriaRepository.findAll();
            return Response.status(200).json(categorias);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async findById(Request: Request, Response: Response) {
        try {
            const id_categoria = parseInt(Request.params.id);
            const categoria = await categoriaRepository.findById(id_categoria);
            return Response.status(200).json(categoria);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async save(Request: Request, Response: Response) {
        try {
            const categoria: ICategoria = Request.body;
            await categoriaRepository.create(categoria);
            return Response.status(201).json(categoria);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async update(Request: Request, Response: Response) {
        try {
            const categoria: ICategoria = Request.body;
            await categoriaRepository.update(categoria);
            return Response.status(200).json(categoria);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async Delete(Request: Request, Response: Response) {
        try {
            const id_categoria = parseInt(Request.params.id);
            await categoriaRepository.Delete(id_categoria);
            return Response.status(200).json('categoria deletado com sucesso!');
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
}