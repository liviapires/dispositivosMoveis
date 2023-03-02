import { Request, Response } from "express";

class UpdateProductController {
    async handle(request: Request, response: Response){
        const { id, name, description, price, url} = request.body;

        let product = {
            "id":"4",
            "name": "Lemon",
            "description": "green fruit",
            "price": "0.75",
            "url": "www.lemon.com"
        }

        product = request.body;

        return response.json(product);
    }
}

export { UpdateProductController };