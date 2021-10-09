import { Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecifications/CreateSpecificationController';
import { listSpecificationsController } from '../modules/cars/useCases/listSpecifications';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post('/', createSpecificationController.handle);

specificationsRoutes.get('/', (request, response) => {
  return listSpecificationsController.handle(request, response);
});

export { specificationsRoutes };
