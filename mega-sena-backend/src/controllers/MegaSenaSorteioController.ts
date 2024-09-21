import { Request, Response } from 'express';
import { MegaSenaSorteioService } from '../services/MegaSenaSorteioService';

const megaSenaSorteioService = new MegaSenaSorteioService();

export class MegaSenaSorteioController {
    async getAll(req: Request, res: Response) {
        try {
            const sorteios = await megaSenaSorteioService.findAll();
            res.json(sorteios);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Erro desconhecido' });
            }
        }
    }

}
