import { Request, Response } from 'express';
import { UpdateProductService } from '../../services/productsServices/UpdateProductService';

class UpdateProductController {
    async handle(request: Request, response: Response){

        const { id, name, description, price, url } = request.body;
        
        const updateProductService = new UpdateProductService();
     
        const product = await updateProductService.execute({
          id,
          name,
          description,
          price,
          url,
        });
     
        return response.json(product);
    }
}

export { UpdateProductController };