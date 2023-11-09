
import UserRepository from "../repositories/UserRepository";
import { IUser } from "../interfaces/IUser";
import { Request, Response } from "express";

const userRepository = new UserRepository();
export default class UserController {
    async findAll(Request: Request, Response: Response) {
        try {
            const users = await userRepository.findAll();
            return Response.status(200).json(users);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async findById(Request: Request, Response: Response) {
        try {
            const id_users = parseInt(Request.params.id);
            const user = await userRepository.findById(id_users);
            return Response.status(200).json(user);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async save(Request: Request, Response: Response) {
        try {
            const user: IUser = Request.body;
            await userRepository.create(user);
            return Response.status(201).json(user);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async update(Request: Request, Response: Response) {
        try {
            const user: IUser = Request.body;
            await userRepository.update(user);
            return Response.status(200).json(user);
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
    async Delete(Request: Request, Response: Response) {
        try {
            const id_users = parseInt(Request.params.id);
            await userRepository.Delete(id_users);
            return Response.status(200).json('user deletado com sucesso!');
        } catch (error) {
            console.error(error);
            return Response.status(500).json('Internal Server error');
        }
    }
}