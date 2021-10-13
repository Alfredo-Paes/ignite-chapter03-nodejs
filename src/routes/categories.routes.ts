import { Router } from 'express';
import multer from 'multer';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import uploadConfig from '../config/upload';

const categoriesRoutes = Router();

const uploadCategories = multer(uploadConfig.upload('./tmp/categories'));

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.use(ensureAuthenticated);
categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', listCategoriesController.handle);
categoriesRoutes.post(
  '/import',
  uploadCategories.single('categories'),
  importCategoryController.handle,
);

export { categoriesRoutes };
