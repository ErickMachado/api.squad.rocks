import { z } from 'zod'

const ENV_SCHEMA = z.object({
  // Application
  ENVIRONMENT: z.enum(['local', 'development', 'production']),
  PORT: z.coerce.number().positive()
})

export class Environment {
  private variables: z.infer<typeof ENV_SCHEMA>

  public constructor() {
    this.variables = ENV_SCHEMA.parse(process.env)
  }

  public get port() {
    return this.variables.PORT
  }
}
