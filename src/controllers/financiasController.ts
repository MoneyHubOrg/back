
import FinanciasRepository from "../repositories/FinanciasRepository";
import { IFinancias } from "../interfaces/IFinancias";
import { Request, Response } from "express";

const financiasRepository = new FinanciasRepository();
export default class FinanciasController {
    async findAll(Request: Request, Response: Response) {
        try {
            const financias = await financiasRepository.findAll();
            return Response.status(200).json(financias);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async findById(Request: Request, Response: Response) {
        try {
            const id_financias = parseInt(Request.params.id);
            const financias = await financiasRepository.findById(id_financias);
            return Response.status(200).json(financias);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async save(Request: Request, Response: Response) {
        try {
            const financias: IFinancias = Request.body;
            await financiasRepository.create(financias);
            return Response.status(201).json(financias);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async update(Request: Request, Response: Response) {
        try {
            const financias: IFinancias = Request.body;
            await financiasRepository.update(financias);
            return Response.status(200).json(financias);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async Delete(Request: Request, Response: Response) {
        try {
            const id_financias = parseInt(Request.params.id);
            await financiasRepository.Delete(id_financias);
            return Response.status(200).json('financias deletado com sucesso!');
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
}