import { Specification } from '../model/Specification';

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
