import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const list = this.listAllUsersUseCase.execute({ user_id } as { user_id: string; });
      return response.json(list).send();
    }
    catch(error) {
      return response.status(400).json({error});
    }
  }
}

export { ListAllUsersController };
