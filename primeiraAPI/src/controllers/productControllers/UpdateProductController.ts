import { Request, Response } from 'express';

class UpdateProductController {
    async handle(request: Request, response: Response) {
        let product = {
            "id":"1",
            "name":"Banana",
            "description":"Yellow fruit",
            "price":"0.50",
            "url":"www.banana.com"
        }

        product = request.body;

        return response.json(product);
    }
}

export { UpdateProductController };