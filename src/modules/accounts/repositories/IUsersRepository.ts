import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/Users';

interface IUsersRepository {
  createUser(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  getUsers(): Promise<User[]>;
}

export { IUsersRepository };
