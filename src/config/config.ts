import * as dotenv from 'dotenv'
dotenv.config()

const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  filePathLogs: process.env.FILE_PATH_LOGS || 'src/logs/default.log',
}

const configType: typeof config = config

export default configType
