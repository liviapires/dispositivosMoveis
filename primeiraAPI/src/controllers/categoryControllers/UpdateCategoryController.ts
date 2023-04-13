import { Request, Response } from "express";
import { UpdateCategoryService } from "../../services/categoriesServices/UpdateCategoryService";

class UpdateCategoryController {
    async handle(request: Request, response: Response){

        const { id, name } = request.body;
        
        const updateCategoryService = new UpdateCategoryService();
     
        const category = await updateCategoryService.execute({
          id,
          name
        });
     
        return response.json(category);
    }
}

export { UpdateCategoryController };