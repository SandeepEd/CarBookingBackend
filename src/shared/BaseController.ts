import { NextFunction } from "express";

export abstract class BaseController {
    constructor() {
        this.handleController = this.handleController.bind(this);
    }

    public abstract handleController(req: any, res: any, next: NextFunction): Promise<void | any>;


    public handleResponse(res: any, statusCode: any, data: any) {
        res.status(statusCode).json(data);
    }
}