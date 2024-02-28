import { ApiError } from '../exceptions/api-error';
import { Request, Response, NextFunction } from 'express';

export function errorMiddleware(
    err: { message: string; status: number; errors: string[] },
    req: Request,
    res: Response,
    next: NextFunction,
) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message, errors: err.errors });
    }

    console.log(err);
    return res.status(500).json({ message: 'Ошибка сервера, что-то пошло не так !' });
}
