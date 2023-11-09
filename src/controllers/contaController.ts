
import ContaRepository from "../repositories/ContaRepository";
import { IConta } from "../interfaces/IConta";
import { Request, Response } from "express";

const contaRepository = new ContaRepository();
export default class ContaController {
    async findAll(Request: Request, Response: Response) {
        try {
            const contas = await contaRepository.findAll();
            return Response.status(200).json(contas);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async findById(Request: Request, Response: Response) {
        try {
            const id_conta = parseInt(Request.params.id);
            const conta = await contaRepository.findById(id_conta);
            return Response.status(200).json(conta);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async save(Request: Request, Response: Response) {
        try {
            const conta: IConta = Request.body;
            await contaRepository.create(conta);
            return Response.status(201).json(conta);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async update(Request: Request, Response: Response) {
        try {
            const conta: IConta = Request.body;
            await contaRepository.update(conta);
            return Response.status(200).json(conta);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async Delete(Request: Request, Response: Response) {
        try {
            const id_conta = parseInt(Request.params.id);
            await contaRepository.Delete(id_conta);
            return Response.status(200).json('conta deletado com sucesso!');
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
}