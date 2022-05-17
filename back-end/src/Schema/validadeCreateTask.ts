import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';

const allFields = 'Todos os campos são necessários!';

export default class validadeCreateTask {
  static joi(req: Request, _res: Response, next: NextFunction) {
    const { task, responsible } = req.body;
    const { error } = Joi.object({
      task: Joi.string().required().messages({
        'any.required': `400|${allFields}`,
        'string.empty': `400|Campo Tarefa necessário`,
      }),
      responsible: Joi.string().min(6).required().messages({
        'any.required': `400|${allFields}`,
        'string.empty': `400|Campo Responsável necessário`,
      }),
    }).validate({ task, responsible });

    if (error) return next(error);

    return next();
  }
}
