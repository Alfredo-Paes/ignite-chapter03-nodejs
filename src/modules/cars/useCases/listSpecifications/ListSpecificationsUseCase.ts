import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

class ListSpecificationsUseCase {
  private specificationsRepository: ISpecificationsRepository;

  constructor(specificationsRepository: ISpecificationsRepository) {
    this.specificationsRepository = specificationsRepository;
  }

  execute(): Specification[] {
    const specifications = this.specificationsRepository.getSpecification();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
