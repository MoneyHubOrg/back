
import UserContaRepository from "../repositories/UserContaRepository";
import { IUserConta } from "../interfaces/IUserConta";
import { Request, Response } from "express";


const userContaRepository = new UserContaRepository();
export default class UserContaController {
    async findAll(Request: Request, Response: Response) {
        try {
            const userConta = await userContaRepository.findAll();
            return Response.status(200).json(userConta);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async findById(Request: Request, Response: Response) {
        try {
            const id_userConta = parseInt(Request.params.id);
            const userConta = await userContaRepository.findById(id_userConta);
            return Response.status(200).json(userConta);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async save(Request: Request, Response: Response) {
        try {
            const userConta: IUserConta = Request.body;
            await userContaRepository.create(userConta);
            return Response.status(201).json(userConta);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async update(Request: Request, Response: Response) {
        try {
            const userConta: IUserConta = Request.body;
            await userContaRepository.update(userConta);
            return Response.status(200).json(userConta);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async Delete(Request: Request, Response: Response) {
        try {
            const id_userConta = parseInt(Request.params.id);
            await userContaRepository.Delete(id_userConta);
            return Response.status(200).json('userConta deletado com sucesso!');
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
}