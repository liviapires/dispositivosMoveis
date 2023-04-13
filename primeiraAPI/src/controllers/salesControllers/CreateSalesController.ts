import { Request, Response } from "express";
import { CreateSaleService } from "../../services/salesServices/CreateSaleService";

class CreateSalesController {
    async handle(request: Request, response: Response) {
        const { total, description, observations} = request.body;

        const createSalesService = new CreateSaleService();

        const sales = await createSalesService.execute({
            total: total,
            description: description,
            observations: observations,
        });
    
    return response.json(sales);
    }
}

export { CreateSalesController };