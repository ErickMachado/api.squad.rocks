import 'dotenv/config'
import { Environment } from '@squadrocks/infrastructure/env'
import type { Application } from '@squadrocks/infrastructure/http/application'

async function main() {
  const environment = new Environment()
  const _application: Application = {
    environment
  }
}

main()
