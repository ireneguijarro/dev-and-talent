import express from 'express';
import {
  createUserController,
  findAllUsersController,
  findOneUserController,
  removeUserController,
  updateUserController,
} from '../controllers/user';

const router = express.Router();

router.get('/', findAllUsersController);
router.get('/:id', findOneUserController);
router.post('/', createUserController);
router.put('/:id', updateUserController);
router.delete('/:id', removeUserController);

export default router;
