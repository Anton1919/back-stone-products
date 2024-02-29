import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
import tokenModel from '../models/token-model';
import { Types } from 'mongoose';

config();

class TokenService {
    generateTokens(payload: any) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, { expiresIn: '30m' });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
            expiresIn: '30d',
        });

        return { accessToken, refreshToken };
    }

    /* Коммент для функции ниже.
    В нашем случае в БД на каждого юзера один токен. 
    И при входе с другого устройства нас выкенет со старого устройства (на котором логинились в первый раз) так как токен перезатрется
    Чтобы сделать по другому, нужно придумать иной способ сохраниния токенов.
    */
    async saveToken(userId: Types.ObjectId, refreshToken: string) {
        // перед тем как сохранить токен мы ищем есть ли такой токен по userId
        const tokenData = await tokenModel.findOne({ user: userId });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await tokenModel.create({ user: userId, refreshToken });
        return token;
    }

    async removeToken(refreshToken: string) {
        const tokenData = await tokenModel.deleteOne({ refreshToken });
        return tokenData;
    }

    async findToken(refreshToken: string) {
        const tokenData = await tokenModel.findOne({ refreshToken });
        return tokenData;
    }

    async validateAccessToken(token: string) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET!);
            return userData;
        } catch (e) {
            return null;
        }
    }

    async validateRefreshToken(token: string) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET!);

            return userData;
        } catch (e) {
            return null;
        }
    }
}

export const tokenService = new TokenService();
