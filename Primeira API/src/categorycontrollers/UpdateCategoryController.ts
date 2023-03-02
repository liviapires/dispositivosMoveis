import { Request, Response } from "express";

class UpdateCategoryController {
    async handle(request: Request, response: Response){

        let product = {
            "id":"2",
            "name": "Instrument"
        }

        product = request.body;

        return response.json(product);
    }
}

export { UpdateCategoryController };