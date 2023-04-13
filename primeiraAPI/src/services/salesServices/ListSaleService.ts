import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../repositories/SalesRepositories";
import { classToPlain } from "class-transformer";

class ListSaleService {
  async execute() {
    const salesRepositories = getCustomRepository(SalesRepositories);

    const sales = await salesRepositories.find();

    return classToPlain(sales);
  }
}

export { ListSaleService };