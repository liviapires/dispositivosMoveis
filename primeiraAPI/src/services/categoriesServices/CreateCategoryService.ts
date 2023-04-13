import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";


interface ICategoryRequest {
    name: string;
 }

 class CreateCategoryService {
    async execute({ name }: ICategoryRequest) {
      
        const categoriesRepositories = getCustomRepository(CategoriesRepositories);

        const category = categoriesRepositories.create({
            name
        });

        await categoriesRepositories.save(category);

        return category;
    }
  }
  export { CreateCategoryService };