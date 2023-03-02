import { Request, Response } from "express";

class CreateSalesController {
    async handle(request: Request, response: Response){
        const { id, productId, userId, total, desc, obs } = request.body;

        const sales = {
            id:id,
            productId:productId,
            userId:userId,
            total:total,
            desc:desc,
            obs:obs
        }

        return response.json(sales);
    }
}

export { CreateSalesController };