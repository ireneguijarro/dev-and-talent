import express from 'express';
import createClientController from '../controllers/client/create.controller';
import findAllClientsController from '../controllers/client/findAll.controller';

const router = express.Router();

router.post('/', createClientController);
router.get('/', findAllClientsController);

export default router;
