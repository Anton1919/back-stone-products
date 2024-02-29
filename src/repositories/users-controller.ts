import { Request, Response, NextFunction } from 'express';
import { userService } from '../domain/user-service';
import { config } from 'dotenv';
import { validationResult } from 'express-validator';
import { ApiError } from '../exceptions/api-error';

config();

class UserController {
    async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req); // здесь получаем результат валидации полей
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array())); // второй парметр передает массив ошибок
            }

            const { email, password } = req.body;
            const userData = await userService.registration(email, password);

            const thirtyDays = 30 * 24 * 60 * 60 * 1000;
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: thirtyDays,
                httpOnly: true,
            });

            return res.json(userData);
        } catch (e) {
            next(e); // Если сюда попадет ApiError то он обработается соответсвующим образом и мы попадем в errorMiddleware который подключили в index.ts
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            const userData = await userService.login(email, password);

            const thirtyDays = 30 * 24 * 60 * 60 * 1000;
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: thirtyDays,
                httpOnly: true,
            });

            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const { refreshToken } = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');

            return res.json(token);
        } catch (e) {
            next(e);
        }
    }

    async activate(req: Request, res: Response, next: NextFunction) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);

            return res.redirect(process.env.CLIENT_URL!); // после активации переводим пользователя на фронтенд
        } catch (e) {
            next(e);
        }
    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await userService.refresh(refreshToken);
            const thirtyDays = 30 * 24 * 60 * 60 * 1000;

            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: thirtyDays,
                httpOnly: true,
            });

            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await userService.getAllUsers();

            return res.json(users); // возвращаются все юзеры и это можно делать даже не авторизованным пользователям
        } catch (e) {
            next(e);
        }
    }
}

export const userController = new UserController();
