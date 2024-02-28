import { Request, Response, Router } from 'express';
import { userController } from '../domain/users-controller';

export const authRouter = Router({});

authRouter.post('/registration', userController.registration);

authRouter.post('/login', userController.login);

authRouter.post('/logout', userController.logout);

authRouter.get('/activate/:link', userController.activate);

authRouter.get('/refresh', userController.refresh);

authRouter.get('/users', userController.getUsers);
