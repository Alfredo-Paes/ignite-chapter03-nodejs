import { Category } from '../entities/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  createCategory({ name, description }: ICreateCategoryDTO): Promise<void>;
  findByName(name: string): Promise<Category>;
  getCategory(): Promise<Category[]>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
