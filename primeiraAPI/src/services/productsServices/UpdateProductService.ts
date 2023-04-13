import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";

interface IProductRequest {
    id: string;
    name: string;
    description: string;
    price: number;
    url: string;
  }
  
  class UpdateProductService {
    async execute({ id, name, description, price, url }: IProductRequest) {
     
      const productsRepositories = getCustomRepository(ProductsRepositories);

      const productAlreadyExists = await productsRepositories.findOne({
        id,
      });

      if (!productAlreadyExists) {
          throw new Error("Product does not exist")
      }

      productAlreadyExists.name=name
      productAlreadyExists.description=description
      productAlreadyExists.price=price
      productAlreadyExists.url=url
      productAlreadyExists.updated_at=new Date()
      
      return await productsRepositories.update(id,productAlreadyExists)
      .then(f => {
          console.log(f);
          var messagmsgeDelete = {
            message:"Registro atualizado com sucesso"
          }
      
          return messagmsgeDelete;
          
      }, err => {
        throw new Error("Erro na atualização");
      });
  
      
    }
  }
  
  export { UpdateProductService };