import { AppDataSource } from '../database/dataSource';
import { MegaSenaSorteio } from '../entities/MegaSenaSorteio';

export class CountNumbersService {
  private megaSenaRepository = AppDataSource.getRepository(MegaSenaSorteio);

  async countNumber(): Promise<MegaSenaSorteio[]> {

    const query = `
      SELECT numero, COUNT(*) AS quantidade
      FROM mega_sena_sorteios
      GROUP BY numero
      ORDER BY quantidade DESC;
    `;

    const result = await this.megaSenaRepository.query(query);

    return result
  }
}