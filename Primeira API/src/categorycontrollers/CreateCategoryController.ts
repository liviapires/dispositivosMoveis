import { Request, Response } from "express";

class CreateCategoryController {
    async handle(request: Request, response: Response){
        const { id, name } = request.body;

        const category = {
            id:id,
            name:name
        }

        return response.json(category);
    }
}

export { CreateCategoryController };