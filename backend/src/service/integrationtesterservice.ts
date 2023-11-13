import "dotenv/config";
import { Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { TestIntegration } from "../entity/TestIntegration";

class TestIntegrationService {
    private readonly IntegrationRepository: Repository<TestIntegration> = AppDataSource.getRepository(TestIntegration);
    
    async create(req: Request, res: Response) {
        try {
            const newIntegration = await this.IntegrationRepository.create(req.body);
            const result = await this.IntegrationRepository.save(newIntegration);
            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error bagian Create Service");
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const integrations = await this.IntegrationRepository.find();
            res.status(200).json(integrations);
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error bagian FindAll Service");
        }
    }

    async find(req: Request, res: Response) {
        try {
            const integrations = await this.IntegrationRepository.find({
                where: {
                    id: req.params.id,
                },
                order: {
                    id: "DESC",
                },
            });
            res.status(200).json(integrations);
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error bagian Find Service");
        }
    }

    async update(req: Request, res: Response) {
        try {
            const integration = await this.IntegrationRepository.findOne(req.params.id);

            if (!integration) {
                return res.status(404).send("Integration not found");
            }

            this.IntegrationRepository.merge(integration, req.body);
            const result = await this.IntegrationRepository.save(integration);

            res.status(200).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error bagian Update Service");
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const integration = await this.IntegrationRepository.findOne(req.params.id);

            if (!integration) {
                return res.status(404).send("Integration not found");
            }

            await this.IntegrationRepository.delete({
                where: {
                    id,
                }
            });
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error bagian Remove Service");
        }
    }
}

export default new TestIntegrationService;
