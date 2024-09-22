import { Request, Response } from 'express';
import { CreateDrawService } from '../services/CreateDrawService';
import { CountNumbersService } from '../services/CountNumbersDrawService';

const createDrawService = new CreateDrawService();
const countNumbersService = new CountNumbersService();

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

    async countNumbers(req: Request, res: Response) {
        try {
            const result = await countNumbersService.countNumber();

            return res.status(200).json(result);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            } else {
                return res.status(400).json({ error: 'Erro desconhecido' });
            }
        }
    }
}
