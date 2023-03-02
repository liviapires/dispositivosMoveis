import { Request, Response } from "express";

class ListProductController{
    async handle(request: Request, response: Response){
        const products = [
            { 
                "id": "1",
                "name": "Apple",
                "description": "Red Fruit",
                "price": "0.25",
                "url": "www.apple.com"
            },
            { 
                "id": "2",
                "name": "Orange",
                "description": "Orange Fruit",
                "price": "0.50",
                "url": "www.apple.com"
            },
            { 
                "id": "3",
                "name": "Watermelon",
                "description": "Green outside, red inside Fruit",
                "price": "5.00",
                "url": "www.watermelon.com"
            }
        ];

        return response.json(products);
    }
}

export { ListProductController };