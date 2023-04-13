import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/categoriesServices/DeleteCategoryService";

class DeleteCategoryController {
    async handle(request: Request, response: Response) {
    
        const id= request.params.id;
        const deleteCategoryService= new DeleteCategoryService();
    
       const msg = await deleteCategoryService.execute({
         id
       });
    
       return response.json(msg);
    
      }
}

export { DeleteCategoryController };