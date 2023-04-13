import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../repositories/SalesRepositories";

interface ISaleRequest {
    id: string;
    total: number;
    description: string;
    observations: string;
  }
  
  class UpdateSaleService {
    async execute({ id, total, description, observations }: ISaleRequest) {
     
      const salesRepository = getCustomRepository(SalesRepositories);

      const saleAlreadyExists = await salesRepository.findOne({
        id,
      });

      if (!saleAlreadyExists) {
          throw new Error("Sale not exists")
      }

      saleAlreadyExists.total=total
      saleAlreadyExists.description=description
      saleAlreadyExists.observations=observations
      saleAlreadyExists.updated_at=new Date()
      
      return await salesRepository.update(id,saleAlreadyExists)
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
  
  export { UpdateSaleService };