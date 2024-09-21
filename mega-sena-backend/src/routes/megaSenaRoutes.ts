import { Router } from 'express';
import { MegaSenaSorteioController } from '../controllers/MegaSenaSorteioController';

const router = Router();
const megaSenaSorteioController = new MegaSenaSorteioController();

router.get('/sorteios', megaSenaSorteioController.getAll);

export default router;
