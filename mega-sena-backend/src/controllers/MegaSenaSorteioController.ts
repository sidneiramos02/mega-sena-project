import { Request, Response } from 'express';
import { CreateDrawService } from '../services/CreateDrawService';

const createDrawService = new CreateDrawService();

export class MegaSenaSorteioController {
    async create(req: Request, res: Response) {
        const { numeros, data_sorteio } = req.body;

        try {
            const draw = await createDrawService.criarSorteio(numeros, data_sorteio);

            return res.status(201).json(draw);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            } else {
                return res.status(400).json({ error: 'Erro desconhecido' });
            }
        }
    }
}
