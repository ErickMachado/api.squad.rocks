import 'dotenv/config'
import { Environment } from '@squadrocks/infrastructure/env'
import type { Application } from '@squadrocks/infrastructure/http/application'
import { Logger } from '@squadrocks/infrastructure/telemetry/logger'

async function main() {
  const environment = new Environment()
  const logger = new Logger(environment)
  const _application: Application = {
    environment,
    logger
  }

  logger.debug('initializing web server', {
    host: 'localhost',
    port: environment.port
  })
}

main()
