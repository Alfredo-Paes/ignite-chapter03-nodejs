import { getRepository, Repository } from 'typeorm';
import { Specification } from '../../entities/Specification';

import {
  ICreateSpecificationsRepositoryDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async createSpecification({
    name,
    description,
  }: ICreateSpecificationsRepositoryDTO): Promise<void> {
    const specification = this.repository.create({ name, description });
    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name });

    return specification;
  }

  async getSpecification(): Promise<Specification[]> {
    const specifications = await this.repository.find();

    return specifications;
  }
}

export { SpecificationsRepository };
