import { AuthServices, IAuthServices } from "../../../services";
import { IUseCase } from "../../../shared/IUseCase";
import { IUser } from "../../user/IUserRepo";
import { UserRepository } from "../../user/userRepository";

export class LogInUseCase {
    constructor(private authServices: IAuthServices, private userRepo: UserRepository) { }
    async execute(data: Pick<IUser, 'email' | 'password'>): Promise<any> {
        const { password, email } = data;
        const user = await this.userRepo.getUserByEmail(email);
        if (!user) {
            throw new Error("User not present");
        }

        const isPasswordValid = await this.authServices.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error("Invalid password");
        }

        return user;
    }
} 