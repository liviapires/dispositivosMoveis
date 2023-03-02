import { Request, Response } from "express";

class CreateSalesController {
    async handle(request: Request, response: Response) {
        const { id, productId, userId, total, desc, obs} = request.body;

        console.log(id);
        console.log(productId);
        console.log(userId);
        console.log(total);
        console.log(desc);
        console.log(obs);

        const sales = {
            id: id,
            productId: productId,
            userId: userId,
            total: total,
            desc: desc,
            obs: obs
        }

        return response.json(sales);
    }
}

export { CreateSalesController };