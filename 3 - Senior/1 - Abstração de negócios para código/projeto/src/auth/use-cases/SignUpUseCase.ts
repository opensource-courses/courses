import IEncryptManager from "./ports/IEncryptManag";
import ITokenManager from "./ports/ITokenManager";
import IUserRepository from "./ports/IUserRepository";
import User from "../entities/User";
import ICreateUserDto from "../dtos/ICreateUserDto";

export default class SignUpUseCase {
  constructor(
    private userRepository: IUserRepository,
    private tokenManager: ITokenManager,
    private encryptManager: IEncryptManager
  ) {}

  async execute({ name, email, password }: ICreateUserDto): Promise<string> {
    const user = User.create(name, email, password);

    const userAlreadyExists = await this.userRepository.findByEmail(user.email);

    if (userAlreadyExists) throw new Error("E-mail already registered.");

    const hashedPassword = await this.encryptManager.encrypt(user.password);

    const storedUser = await this.userRepository.save({
      name: user.name,
      email: user.email,
      password: hashedPassword,
    });

    return this.tokenManager.generate(storedUser.id);
  }
}
