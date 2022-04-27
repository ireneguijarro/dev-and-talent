import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { SomeJSONSchema } from 'ajv/dist/types/json-schema';

interface ValidateProps {
  properties: any;
  data: any;
}

const ajv = new Ajv();
addFormats(ajv);

export const validate = ({ properties, data }: ValidateProps) => {
  const schema: SomeJSONSchema = {
    type: 'object',
    properties: properties,
    required: ['id'],
    additionalProperties: false,
  };
  const validate = ajv.compile(schema);
  return validate(data);
};
