import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import { MegaSenaSorteioController } from '../controllers/MegaSenaSorteioController';
import uniqueNumbers from '../middleware/uniqueNumbers';

const router = Router();
const megaSenaSorteioController = new MegaSenaSorteioController();

router.post(
    '/sorteios',uniqueNumbers,
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            numeros: Joi.array().items(Joi.number().min(1).max(60)).length(6).required(),
            data_sorteio: Joi.date().iso().required(),
        }),
    }),
    megaSenaSorteioController.create.bind(megaSenaSorteioController)
);

router.get(
    '/count',
    megaSenaSorteioController.countNumbers.bind(megaSenaSorteioController));

export default router;
