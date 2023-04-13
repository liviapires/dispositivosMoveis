import { Request, Response } from "express";
import { DeleteSaleService } from "../../services/salesServices/DeleteSaleService";

class DeleteSalesController {
    async handle(request: Request, response: Response) {
    
        const id= request.params.id;
        const deleteSaleService= new DeleteSaleService();
    
       const msg = await deleteSaleService.execute({
         id
       });
    
       return response.json(msg);
    
      }
}

export { DeleteSalesController };