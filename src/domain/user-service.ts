import UserModel from '../models/user-model';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { mailService } from './mail-service';
import { ModelUserType, UserDto } from './user-dto';
import { tokenService } from './token-service';
import { config } from 'dotenv';
import { ApiError } from '../exceptions/api-error';
import { JwtPayload } from 'jsonwebtoken';

config();

class UserService {
    async registration(email: string, password: string) {
        const candidate = await UserModel.findOne({ email }); // ищем есть ли такой пользователь
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует !`);
        }
        const hashPassword = await bcrypt.hash(password, 3); // хешируем настоящий пароль в рандомную строку для Базы Данных
        const activationLink = uuidv4(); // создаем уникальную строку для активации почты

        const user = await UserModel.create({ email, password: hashPassword, activationLink });
        await mailService.sendActivationMail(
            email,
            `${process.env.API_URL}/api/activate/${activationLink}`,
        ); // отправляем на почту ссылку для активаации

        const userDto = new UserDto(user as ModelUserType); // id, email, isActivated
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto,
        };
    }

    async activate(activationLink: string) {
        const user = await UserModel.findOne({ activationLink });
        if (!user) {
            throw ApiError.BadRequest('Некорректная ссылка !');
        }
        user.isActivated = true;
        await user.save();
    }

    async login(email: string, password: string) {
        const user = await UserModel.findOne({ email });

        if (!user) {
            throw ApiError.BadRequest('Пользователь с таким email не найден');
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль');
        }

        const userDto = new UserDto(user as ModelUserType); // id, email, isActivated
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto,
        };
    }

    async logout(refreshToken: string) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken: string) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = (await tokenService.validateRefreshToken(refreshToken)) as JwtPayload;
        const tokenFromDb = await tokenService.findToken(refreshToken);

        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }

        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user as ModelUserType); // id, email, isActivated
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto,
        };
    }

    async getAllUsers() {
        const users = await UserModel.find();

        return users; // возвращаются все юзеры и это можно делать даже не авторизованным пользователям
    }
}
export const userService = new UserService();
