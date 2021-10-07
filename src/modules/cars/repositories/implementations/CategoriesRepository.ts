import { getRepository, Repository } from 'typeorm';
import { Category } from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async createCategory({
    name,
    description,
  }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ name, description });
    await this.repository.save(category);
  }

  async getCategory(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const categories = await this.repository.findOne({ name });

    return categories;
  }
}

export { CategoriesRepository };
