import { Request, Response } from "express";

class DeleteUserController {
    async handle(request: Request, response: Response){
        const deletado = "Deletando usuario";
        return response.json(deletado);
    }
}

export { DeleteUserController };