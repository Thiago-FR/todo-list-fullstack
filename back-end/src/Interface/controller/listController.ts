import { Request, Response, NextFunction } from "express";

export default interface IListController {
  findAll: (req: Request, res: Response) => Promise<Response>,
  create: (req: Request, res: Response) => Promise<Response>,
  update: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>,
  delete: (req: Request, res: Response, next: NextFunction) => Promise<Response | void >,
}