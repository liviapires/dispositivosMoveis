import { Request, Response } from "express";

class ListCategoryController{
    async handle(request: Request, response: Response){
        const categories = [
            { 
                "id": "1",
                "name": "Fruits"
            },
            { 
                "id": "2",
                "name": "Vegetables"
            },
            { 
                "id": "3",
                "name": "Meat"
            }
        ];

        return response.json(categories);
    }
}

export { ListCategoryController };