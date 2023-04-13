import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";
import { classToPlain } from "class-transformer";

class ListCategoryService {
  async execute() {
    const categoriesRepositories = getCustomRepository(CategoriesRepositories);

    const categories = await categoriesRepositories.find();

    return classToPlain(categories);
  }
}

export { ListCategoryService };