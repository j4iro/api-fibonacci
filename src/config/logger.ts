import { createLogger, format, transports } from 'winston'
import config from './config'
import path from 'path'

// Format for print logs
const formatCustom = format.combine(
  format.splat(),
  format.simple(),
  format.timestamp(),
  format.printf((info) => {
    return `[${info.timestamp}] ${info.level}: ${info.message}`
  })
)

// Transport for level info and error
const logger = createLogger({
  transports: [
    new transports.File({
      format: formatCustom,
      filename: path.join(config.filePathLogs),
      level: 'info',
    }),
    new transports.File({
      format: formatCustom,
      filename: path.join(config.filePathLogs),
      level: 'error',
    }),
  ],
})

// Print logs with logger in console if is not production
if (config.nodeEnv !== 'production') {
  logger.add(
    new transports.Console({
      format: formatCustom,
    })
  )
}

export default logger
