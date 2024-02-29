import { Request, Response, Router } from 'express';
import { userController } from '../domain/users-controller';
import { body } from 'express-validator';
import { authMiddleware } from '../middlewares/auth-middleware';

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

// ниже выполняем получение пользователей, но это могут делать только авторизованные пользователи благодаря нашему middleware
authRouter.get('/users', authMiddleware, userController.getUsers);
