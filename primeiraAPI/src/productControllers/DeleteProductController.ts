import { Request, Response } from "express";

class DeleteProductController {
    async handle(request: Request, response: Response){
        return response.json("Deleted Resource");
    }
}

export { DeleteProductController };