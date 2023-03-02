import { Request, Response } from "express";

class DeleteCategoryController{
    async handle(request: Request, response: Response){
        return response.json("Deleted Resource");
    }
}

export { DeleteCategoryController };