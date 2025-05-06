import 'dotenv/config'
import { Environment } from '@squadrocks/infrastructure/env'
import type { Application } from '@squadrocks/infrastructure/http/application'
import { WebServer } from '@squadrocks/infrastructure/http/web-server'
import { Logger } from '@squadrocks/infrastructure/telemetry/logger'

const SIGNALS = ['SIGINT', 'SIGTERM', 'SIGQUIT']

async function main() {
  const environment = new Environment()
  const logger = new Logger(environment)
  const application: Application = {
    environment,
    logger
  }
  const server = new WebServer(application)

  try {
    logger.debug('initializing web server', {
      host: 'localhost',
      port: environment.port
    })

    server.start()

    for (const signal of SIGNALS) {
      process.once(signal, async () => {
        await server.shutdown()
        process.exit(0)
      })
    }
  } catch (error) {
    console.error(error)
    logger.error('failed to initialize web server')
    process.exit(1)
  }
}

main()
