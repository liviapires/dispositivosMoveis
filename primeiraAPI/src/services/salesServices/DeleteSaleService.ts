import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../repositories/SalesRepositories";

interface ISaleDelete {
    id: string;
}
class DeleteSaleService {
  async execute({id}:ISaleDelete) {

      console.log(id);
      const salesRepository = getCustomRepository(SalesRepositories);

      const userAlreadyExists = await salesRepository.findOne({
        id,
      });

      if (!userAlreadyExists) {
          throw new Error("Sale not exists");
      }

      return await salesRepository.delete(id)
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

export { DeleteSaleService };