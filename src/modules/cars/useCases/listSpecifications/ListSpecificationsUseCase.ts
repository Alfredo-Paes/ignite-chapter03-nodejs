import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';

import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

@injectable()
class ListSpecificationsUseCase {
  private specificationsRepository: ISpecificationsRepository;

  constructor(
    @inject('SpecificationsRepository')
    specificationsRepository: ISpecificationsRepository,
  ) {
    this.specificationsRepository = specificationsRepository;
  }

  async execute(): Promise<Specification[]> {
    const specifications =
      await this.specificationsRepository.getSpecification();

    if (specifications.length === 0) {
      throw new AppError('No specifications found!', 404);
    }

    return specifications;
  }
}

export { ListSpecificationsUseCase };
