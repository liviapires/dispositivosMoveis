import { Request, Response } from "express";

class CreateSalesController {
    async handle(request: Request, response: Response) {
        const { id, productId, total, desc, obs} = request.body;

        console.log(id);
        console.log(productId);
        console.log(total);
        console.log(desc);
        console.log(obs);

        const sales = {
            id: id,
            productId: productId,
            total: total,
            desc: desc,
            obs: obs
        }

        return response.json(sales);
    }
}

export { CreateSalesController };