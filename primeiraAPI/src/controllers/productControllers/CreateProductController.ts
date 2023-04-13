import { Request, Response } from 'express';
import { CreateProductService } from '../../services/productsServices/CreateProductService';

class CreateProductController {
    async handle(request: Request, response: Response) {
        const { name, description, price, url} = request.body;

        const createProductsService = new CreateProductService();

        const product = await createProductsService.execute({
            name: name,
            description: description,
            price: price,
            url: url,
        });
    
    return response.json(product);
    }
}

export { CreateProductController };