import { Request, Response } from "express";

class ListCategoryController{
    async handle(request: Request, response: Response){
        const category = [
            { 
                "id": "1",
                "name": "Fruit"
            },
            { 
                "id": "2",
                "name": "Instrument"
            },
            { 
                "id": "3",
                "name": "Clothing"
            }
        ];

        return response.json(category);
    }
}

export { ListCategoryController };