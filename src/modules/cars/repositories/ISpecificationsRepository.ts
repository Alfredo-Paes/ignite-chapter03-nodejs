import { Specification } from '../entities/Specification';

interface ICreateSpecificationsRepositoryDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  createSpecification({
    name,
    description,
  }: ICreateSpecificationsRepositoryDTO): void;

  findByName(name: string): Specification;

  getSpecification(): Specification[];
}

export { ICreateSpecificationsRepositoryDTO, ISpecificationsRepository };
