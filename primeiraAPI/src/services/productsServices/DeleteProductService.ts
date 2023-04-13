import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/ProductsRepositories";

interface IProductDelete {
    id: string;
}
class DeleteProductService {
  async execute({id}:IProductDelete) {

      console.log(id);
      const productsRepositories = getCustomRepository(ProductsRepositories);

      const productAlreadyExists = await productsRepositories.findOne({
        id,
      });

      if (!productAlreadyExists) {
          throw new Error("Sale not exists");
      }

      return await productsRepositories.delete(id)
            .then(f => {
                console.log(f);
                var messageDelete = {
                  message:"Registro excluido com sucesso"
                }
            
                return messageDelete;
                
            }, err => {
              throw new Error("Erro na exclusão");
            });
           
  }
}

export { DeleteProductService };