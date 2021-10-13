import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { User } from '../../entities/Users';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class ListUsersUseCase {
  private usersRepository: IUsersRepository;

  constructor(
    @inject('UsersRepository')
    usersRepository: IUsersRepository,
  ) {
    this.usersRepository = usersRepository;
  }

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.getUsers();

    if (users.length === 0) {
      throw new AppError('Users not found!', 404);
    }

    return users;
  }
}

export { ListUsersUseCase };
