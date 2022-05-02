import express from 'express';
import loginController from '../controllers/auth/login.controller';
import registerController from '../controllers/auth/register.controller';

const router = express.Router();

router.post('/login', loginController);
router.post('/register', registerController);

export default router;
