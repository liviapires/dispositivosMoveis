import { Request, Response } from "express";

class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        
        let category = {
            "id":"1",
            "name":"Fruits"
        }

        category = request.body;

        return response.json(category);
    }
}

export { UpdateCategoryController };