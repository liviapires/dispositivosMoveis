import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../repositories/SalesRepositories";


interface ISaleRequest {
    total: number;
    description: string;
    observations: string;
 }

 class CreateSaleService {
    async execute({ total, description, observations }: ISaleRequest) {
      
        const salesRepository = getCustomRepository(SalesRepositories);

        const sale = salesRepository.create({
            total,
            description,
            observations
        });

        await salesRepository.save(sale);

        return sale;
    }
  }
  export { CreateSaleService };