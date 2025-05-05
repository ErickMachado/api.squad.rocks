import type { Environment } from '@squadrocks/infrastructure/env'
import winston from 'winston'

type LogMetadata = Record<string, string | number>

export class Logger {
  private logger: winston.Logger

  public constructor(environment: Environment) {
    this.logger = winston.createLogger({
      defaultMeta: {
        environment: environment.runtime
      },
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
      level: 'debug',
      transports: [new winston.transports.Console()],
      silent: environment.isTestEnvironment
    })
  }

  public debug(message: string, meta?: LogMetadata): void {
    this.logger.debug(message, meta)
  }
}
