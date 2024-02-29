import { ApiError } from '../exceptions/api-error';
import { Request, Response, NextFunction } from 'express';
import { tokenService } from '../domain/token-service';

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers.authorization; // пытаемся достать наш токен
        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError());
        }
        const accessToken = authorizationHeader.split(' ')[1]; // достаем токен из строки "Bearer jwt155hr..."
        if (!accessToken) {
            return next(ApiError.UnauthorizedError());
        }

        const userData = await tokenService.validateAccessToken(accessToken);
        if (!userData) {
            return next(ApiError.UnauthorizedError());
        }

        // @ts-ignore
        req.user = userData;
        next(); // обязательно пишем для того чтобы следующий middleware отработал
    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
}
