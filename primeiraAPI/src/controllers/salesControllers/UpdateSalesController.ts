import { Request, Response } from "express";
import { UpdateSaleService } from "../../services/salesServices/UpdateSaleService";

class UpdateSalesController {
    async handle(request: Request, response: Response){

        const { id, total, description, observations } = request.body;
        
        const updateSaleService = new UpdateSaleService();
     
        const sale = await updateSaleService.execute({
          id,
          total,
          description,
          observations,
        });
     
        return response.json(sale);
    }
}

export { UpdateSalesController };