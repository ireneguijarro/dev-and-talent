import express from 'express';
import { findAllUsersController } from '../controllers/user';

const router = express.Router();

router.get('/', findAllUsersController);

export default router;
