import { EntityRepository, Repository } from "typeorm";
import { Sale } from "../entities/Sales";

@EntityRepository(Sale)
class SalesRepositories extends Repository<Sale> {}

export { SalesRepositories };