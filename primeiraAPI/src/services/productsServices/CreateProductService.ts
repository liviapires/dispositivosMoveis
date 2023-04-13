import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";


interface IProductRequest {
    name: string;
    description: string;
    price: number;
    url: string;
 }

 class CreateProductService {
    async execute({ name, description, price, url }: IProductRequest) {
      
        const productsRepositories = getCustomRepository(ProductsRepositories);

        const product = productsRepositories.create({
            name,
            description,
            price,
            url,
        });

        await productsRepositories.save(product);

        return product;
    }
  }
  export { CreateProductService };