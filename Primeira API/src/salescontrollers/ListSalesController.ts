import { Request, Response } from "express";

class ListSalesController {
    async handle(request: Request, response: Response){
        const sales = [
            { 
                "id":"1",
                "productId":"2",
                "userId":"7",
                "total":"0.50",
                "desc":"description about the sale",
                "obs":"obs"
            },
            { 
                "id":"2",
                "productId":"1",
                "userId":"4",
                "total":"0.25",
                "desc":"description about the sale",
                "obs":"obs"
            }
        ];

        return response.json(sales);
    }
}

export { ListSalesController };