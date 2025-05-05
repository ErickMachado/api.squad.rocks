import type { Environment } from '@squadrocks/infrastructure/env'
import type { Logger } from '@squadrocks/infrastructure/telemetry/logger'

export type Application = {
  environment: Environment
  logger: Logger
}
