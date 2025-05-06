import type { Application } from '@squadrocks/infrastructure/http/application'
import fastify, { type FastifyInstance } from 'fastify'
import { configureHealthRouter } from './routes/health'

export class WebServer {
  private application: Application
  private instance: FastifyInstance

  public constructor(application: Application) {
    this.application = application
    this.instance = fastify()
    this.configureRouter()
  }

  private configureRouter() {
    this.instance.register(
      (instance) => {
        return configureHealthRouter(instance, this.application)
      },
      { prefix: '/health' }
    )
  }

  public async start() {
    await this.instance.listen({
      port: this.application.environment.port
    })
  }

  public async shutdown() {
    this.application.logger.debug('closing web server', {
      host: 'localhost',
      port: this.application.environment.port
    })
    await this.instance.close()
  }
}
