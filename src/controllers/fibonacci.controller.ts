// import service
import FibonacciServices from '../services/fibonacci.services'

// import types
import { Request, Response, NextFunction } from 'express'

class FibonacciController {
  /**
   * Get fibonacci number by index
   */
  getFibonacciByIndex(req: Request, res: Response, next: NextFunction) {
    try {
      const indexParam = req.query.index as string
      const fibonacci = FibonacciServices.getFibonacciByIndex(
        parseInt(indexParam)
      )
      return res.json({
        success: true,
        data: {
          fibonacci,
        },
      })
    } catch (err) {
      next(err)
    }
  }
}

export default new FibonacciController()
