import Ajv, { JSONSchemaType } from 'ajv';
import addFormats from 'ajv-formats';
import { NextFunction, Request, Response } from 'express';
import { PartialUser } from '../../../../core/entities/user';
import { userInteractor } from '../../../../core/interactors';

const ajv = new Ajv();
addFormats(ajv);

const createUserController = async (req: Request, res: Response, next: NextFunction) => {
  const schema: JSONSchemaType<PartialUser> = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      availability: { type: 'string' },
      email: { type: 'string', format: 'email' },
      country: { type: 'string' },
    },
    required: ['availability', 'country', 'email', 'name'],
    additionalProperties: false,
  };
  const validate = ajv.compile(schema);

  try {
    const data = req.body;
    if (validate(data)) {
      const user = await userInteractor?.create(req.body);
      res.send({ user });
    } else {
      res.status(500).send(validate.errors);
    }
  } catch (error) {
    return next(error);
  }
};

export default createUserController;
