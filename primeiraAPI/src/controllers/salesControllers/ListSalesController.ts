import { Request, Response } from "express";
import { ListSaleService } from "../../services/salesServices/ListSaleService";

class ListSalesController {
    async handle(request: Request, response: Response){
        const listSalesService = new ListSaleService();

        const sales = await listSalesService.execute();

        return response.json(sales);
    }
}

export { ListSalesController };