import Ajv, { JSONSchemaType } from 'ajv';
import { NextFunction, Request, Response } from 'express';
import { PartialClient } from '../../../../core/entities/client';
import { clientInteractor } from '../../../../core/interactors';

const ajv = new Ajv();

const createClientController = async (req: Request, res: Response, next: NextFunction) => {
  const schema: JSONSchemaType<PartialClient> = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      country: { type: 'string' },
    },
    required: ['country', 'name'],
    additionalProperties: false,
  };
  const validate = ajv.compile(schema);

  try {
    const data = req.body;

    if (validate(data)) {
      const client = await clientInteractor?.create(req.body);
      return res.send({ client });
    } else {
      return res.status(500).send(validate.errors);
    }
  } catch (error) {
    return next(error);
  }
};

export default createClientController;
