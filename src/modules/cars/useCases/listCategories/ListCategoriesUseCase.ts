import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';

import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
class ListCategoriesUseCase {
  private categoriesRepository: ICategoriesRepository;

  constructor(
    @inject('CategoriesRepository')
    categoriesRepository: ICategoriesRepository,
  ) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.getCategory();

    if (categories.length === 0) {
      throw new AppError('No categories found!', 404);
    }

    return categories;
  }
}

export { ListCategoriesUseCase };
