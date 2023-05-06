import { compare, hash } from "bcrypt";


export interface IAuthServices {
    hashPassword(password: string): Promise<string>;
    compare(userPassword: string, hashedPassword: string): Promise<boolean>;
}

export class AuthServices implements IAuthServices {
    constructor() { }

    public hashPassword(password: string) {
        return hash(password, 12);
    }

    public compare(userPassword: string, hashedPassword: string) {
        return compare(userPassword, hashedPassword);
    }
}

export const authServices = new AuthServices();