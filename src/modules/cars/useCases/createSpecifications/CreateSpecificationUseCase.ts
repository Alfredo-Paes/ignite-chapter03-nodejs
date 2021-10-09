import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  private specificationRepository: ISpecificationsRepository;

  constructor(
    @inject('SpecificationsRepository')
    specificationRepository: ISpecificationsRepository,
  ) {
    this.specificationRepository = specificationRepository;
  }

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists');
    }

    await this.specificationRepository.createSpecification({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
