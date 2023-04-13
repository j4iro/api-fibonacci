import joi from 'joi'
import boom from '@hapi/boom'
import { Request, Response, NextFunction } from 'express'

// Validation handler for request endpoints
const validationHandler = (
  schema: joi.PartialSchemaMap,
  check: 'body' | 'query' | 'params' | 'headers' = 'body'
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validateOptions: joi.ValidationOptions = req[check as keyof Request]
    const { error } = joi.object(schema).validate(validateOptions)
    error ? next(boom.badRequest(error)) : next()
  }
}

export default validationHandler
