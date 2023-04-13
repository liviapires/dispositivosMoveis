import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";

interface ICategoryRequest {
    id: string;
    name: string;
  }
  
  class UpdateCategoryService {
    async execute({ id, name }: ICategoryRequest) {
     
      const categoriesRepositories = getCustomRepository(CategoriesRepositories);

      const categoryAlreadyExists = await categoriesRepositories.findOne({
        id,
      });

      if (!categoryAlreadyExists) {
          throw new Error("Product does not exist")
      }

      categoryAlreadyExists.name=name
      categoryAlreadyExists.updated_at=new Date()
      
      return await categoriesRepositories.update(id,categoryAlreadyExists)
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
  
  export { UpdateCategoryService };