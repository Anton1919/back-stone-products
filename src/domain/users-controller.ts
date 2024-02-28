import { Request, Response, NextFunction } from 'express';
import { userService } from './user-service';

class UserController {
    async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            const userData = await userService.registration(email, password);

            const thirtyDays = 30 * 24 * 60 * 60 * 1000;
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: thirtyDays,
                httpOnly: true,
            });

            return res.json(userData);
        } catch (e) {
            console.error(e);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            res.json(['123', '456']);
        } catch (e) {}
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (e) {}
    }

    async activate(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (e) {}
    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (e) {}
    }

    async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            res.json(['123', '456']);
        } catch (e) {}
    }
}

export const userController = new UserController();
