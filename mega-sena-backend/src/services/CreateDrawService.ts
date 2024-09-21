import { AppDataSource } from '../database/dataSource';
import { MegaSenaSorteio } from '../entities/MegaSenaSorteio';

export class CreateDrawService {
  private megaSenaRepository = AppDataSource.getRepository(MegaSenaSorteio);

  async criarSorteio(numeros: number[], dataSorteio: Date): Promise<MegaSenaSorteio[]> {

    const sorteios: MegaSenaSorteio[] = [];
    
    for (const numero of numeros) {
      const sorteio = new MegaSenaSorteio();
      sorteio.numero = numero;
      sorteio.data_sorteio = dataSorteio;
      sorteios.push(sorteio);
    }

    return this.megaSenaRepository.save(sorteios);
  }
}
