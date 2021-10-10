import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listSpecificationsUseCase = container.resolve(
        ListSpecificationsUseCase,
      );
      const allSpecifications = await listSpecificationsUseCase.execute();

      return response.status(200).json(allSpecifications);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListSpecificationsController };
