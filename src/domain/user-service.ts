import UserModel from '../models/user-model';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { mailService } from './mail-service';
import { ModelUserType, UserDto } from './user-dto';
import { tokenService } from './token-service';

class UserService {
    async registration(email: string, password: string) {
        const candidate = await UserModel.findOne({ email }); // ищем есть ли такой пользователь
        if (candidate) {
            throw new Error(`Пользователь с почтовым адресом %{email} уже существует !`);
        }
        const hashPassword = await bcrypt.hash(password, 3); // хешируем настоящий пароль в рандомную строку для Базы Данных
        const activationLink = uuidv4(); // создаем уникальную строку для активации почты

        const user = await UserModel.create({ email, password: hashPassword, activationLink });
        await mailService.sendActivationMail(email, activationLink); // отправляем на почту ссылку для активаации

        const userDto = new UserDto(user as ModelUserType); // id, email, isActivated
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto,
        };
    }
}

export const userService = new UserService();
