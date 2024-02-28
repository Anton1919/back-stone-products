import { Request, Response, Router } from 'express';
import { userController } from '../domain/users-controller';
import { body } from 'express-validator';

export const authRouter = Router({});

authRouter.post(
    '/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    userController.registration,
);

authRouter.post('/login', userController.login);

authRouter.post('/logout', userController.logout);

authRouter.get('/activate/:link', userController.activate);

authRouter.get('/refresh', userController.refresh);

authRouter.get('/users', userController.getUsers);
