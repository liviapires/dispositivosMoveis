import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";

interface ICategoryDelete {
    id: string;
}
class DeleteCategoryService {
  async execute({id}:ICategoryDelete) {

      console.log(id);
      const categoriesRepositories = getCustomRepository(CategoriesRepositories);

      const categoryAlreadyExists = await categoriesRepositories.findOne({
        id,
      });

      if (!categoryAlreadyExists) {
          throw new Error("Sale not exists");
      }

      return await categoriesRepositories.delete(id)
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

export { DeleteCategoryService };