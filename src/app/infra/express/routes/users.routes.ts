import express from 'express';
import {
  findAllUsersController,
  findOneUserController,
  removeUserController,
  updateUserController,
} from '../controllers/user';

const router = express.Router();

router.get('/', findAllUsersController);
router.get('/:id', findOneUserController);
router.put('/:id', updateUserController);
router.delete('/:id', removeUserController);

export default router;
