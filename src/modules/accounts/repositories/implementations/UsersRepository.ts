import { getRepository, Repository } from 'typeorm';
import { User } from '../../entities/Users';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async createUser({
    name,
    email,
    driver_license,
    password,
    avatar,
    id,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
      avatar,
      id,
    });
    await this.repository.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const users = await this.repository.findOne({ email });

    return users;
  }

  async findById(id: string): Promise<User> {
    const user_id = await this.repository.findOne(id);

    return user_id;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }
}

export { UsersRepository };
