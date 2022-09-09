import ICredentialsDto from "../dtos/ICredentialsDto";
import IEncryptManager from "./ports/IEncryptManag";
import ITokenManager from "./ports/ITokenManager";
import IUserRepository from "./ports/IUserRepository";

export default class SignInUseCase {
  constructor(
    private userRepository: IUserRepository,
    private tokenManager: ITokenManager,
    private encryptManager: IEncryptManager
  ) {}

  async execute({ email, password }: ICredentialsDto): Promise<string> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new Error("E-mail not registered.");

    const isCorrectPassword = await this.encryptManager.compare(
      password,
      user.password
    );

    if (!isCorrectPassword) throw new Error("Incorrect password.");

    return this.tokenManager.generate(user.id);
  }
}
