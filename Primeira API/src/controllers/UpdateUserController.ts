import { Request, Response } from "express";

class UpdateUserController {
    async handle(request: Request, response: Response){
        let newUser = {
            "name": "NomeAntigo",
            "email": "EmailAntigo@email.com",
            "admin": false,
            "password": "1234"
        };
        console.log(newUser);

        console.log("Adicionando alterações ao usuario...");
        newUser = request.body;
        console.log("Usuario alterado! Agora é: ", newUser);
        return response.json(newUser);
    }
}

export { UpdateUserController };