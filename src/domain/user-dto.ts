// data transfer object
import { Types } from 'mongoose';

export type ModelUserType = {
    _id: Types.ObjectId;
    email: string;
    password: string;
    isActivated: boolean;
    activationLink: string | undefined;
    __v: number;
};

export class UserDto {
    email: string;
    id: Types.ObjectId;
    isActivated: boolean;

    constructor(model: ModelUserType) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
    }
}
