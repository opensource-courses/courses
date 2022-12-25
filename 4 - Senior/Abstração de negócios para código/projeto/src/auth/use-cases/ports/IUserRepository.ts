import ICreateUserDto from "../../dtos/ICreateUserDto";
import IUser from "../../entities/IUser";

export default interface IUserRepository {
  findByEmail(email: string): Promise<IUser>;
  save(user: ICreateUserDto): Promise<IUser>;
}
