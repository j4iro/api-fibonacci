import joi from 'joi'
import boom from '@hapi/boom'
import { Request, Response, NextFunction } from 'express'

const validate = (
  data: joi.ValidationOptions,
  schema: joi.PartialSchemaMap
) => {
  const { error } = joi.object(schema).validate(data)
  return error
}

const validationHandler = (
  schema: joi.PartialSchemaMap,
  check: 'body' | 'query' | 'params' | 'headers' = 'body'
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validateOptions = req[check as keyof Request]
    const error = validate(validateOptions, schema)
    error ? next(boom.badRequest(error)) : next()
  }
}

export default validationHandler
