import { Request, Response } from "express";

class UpdateSalesController {
    async handle(request: Request, response: Response){

        let sales = {
            "id":"1",
            "productId":"2",
            "userId":"7",
            "total":"0.50",
            "desc":"description about the sale",
            "obs":"obs"
        }

        sales = request.body;

        return response.json(sales);
    }
}

export { UpdateSalesController };