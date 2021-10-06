import { Specification } from '../../entities/Specification';

import {
  ICreateSpecificationsRepositoryDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  createSpecification({
    name,
    description,
  }: ICreateSpecificationsRepositoryDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      nameSpecification => nameSpecification.name === name,
    );

    return specification;
  }

  getSpecification(): Specification[] {
    return this.specifications;
  }
}

export { SpecificationsRepository };
