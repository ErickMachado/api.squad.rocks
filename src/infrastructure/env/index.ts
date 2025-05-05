import { z } from 'zod'

type Runtime = (typeof RUNTIME)[keyof typeof RUNTIME]

const RUNTIME = ['development', 'local', 'production', 'test'] as const
const ENV_SCHEMA = z.object({
  // Application
  ENVIRONMENT: z.enum(RUNTIME),
  PORT: z.coerce.number().positive()
})

export class Environment {
  private variables: z.infer<typeof ENV_SCHEMA>

  public constructor() {
    this.variables = ENV_SCHEMA.parse(process.env)
  }

  public get runtime(): Runtime {
    return this.variables.ENVIRONMENT
  }

  public get isTestEnvironment(): boolean {
    return this.variables.ENVIRONMENT === 'test'
  }

  public get port(): number {
    return this.variables.PORT
  }
}
