import { Request, Response } from "express";
import integrationtesterservice from "../service/integrationtesterservice";

class IntegrationController {
  async create(req: Request, res: Response) {
    try {
      await integrationtesterservice.create(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error bagian Create di Controller");
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      await integrationtesterservice.findAll(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error bagian FindAll di Controller");
    }
  }
  
  async find(req: Request, res: Response) {
    try {
      await integrationtesterservice.find(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error bagian Find di Controller");
    }
  }

  async update(req: Request, res: Response) {
    try {
      await integrationtesterservice.update(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error bagian Update di Controller");
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await integrationtesterservice.delete(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error bagian Delete di Controller");
    }
  }
}

export default new IntegrationController();
