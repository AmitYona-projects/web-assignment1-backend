import { Request } from "express";
import Joi from "joi";
import { wrapMiddleware } from "./middlewares";

export const emptyRequestSchema = Joi.object({
  query: {},
  params: {},
  body: {},
});

const defaultValidationOptions: Joi.ValidationOptions = {
  abortEarly: false,
  allowUnknown: false,
  convert: true,
};

const normalizeRequest = (req: any, value: any) => {
  req.originalBody = req.body;
  req.body = value.body;

  req.originalQuery = req.query;
  req.query = value.query;

  req.originalParams = req.params;
  req.params = value.params;
};

const ValidateRequest = (
  schema: Joi.ObjectSchema,
  options: Joi.ValidationOptions = defaultValidationOptions
) => {
  const validator = async (req: Request) => {
    const { error, value } = schema.unknown().validate(req, options);
    if (error) {
      throw error;
    }
    if (options.convert) {
      normalizeRequest(req, value);
    }
  };
  return wrapMiddleware(validator);
};

export const MongoIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/, 'valid MongoId');

export default ValidateRequest;
