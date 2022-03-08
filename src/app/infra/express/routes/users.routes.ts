import express from 'express';
import { createUserController, findAllUsersController, findOneUserController } from '../controllers/user';

const router = express.Router();

router.get('/', findAllUsersController);
router.get('/:id', findOneUserController);
router.post('/', createUserController);
// router.put('/:id', updateUserController);
// router.delete('/:id', deleteUserController);

export default router;
