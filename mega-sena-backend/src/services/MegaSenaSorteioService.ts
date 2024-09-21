import { AppDataSource } from '../database/dataSource';
import { MegaSenaSorteio } from '../entities/MegaSenaSorteio';

export class MegaSenaSorteioService {
    async findAll() {
        const repository = AppDataSource.getRepository(MegaSenaSorteio);
        return await repository.find();
    }

}
