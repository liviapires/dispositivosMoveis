import { Request, Response } from "express";

class DeleteSalesController {
    async handle(request: Request, response: Response){
        return response.json("Deleted Resource");
    }
}

export { DeleteSalesController };