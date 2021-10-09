import { Specification } from '../entities/Specification';

interface ICreateSpecificationsRepositoryDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  createSpecification({
    name,
    description,
  }: ICreateSpecificationsRepositoryDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
  getSpecification(): Promise<Specification[]>;
}

export { ICreateSpecificationsRepositoryDTO, ISpecificationsRepository };
