import type { Application } from '@squadrocks/infrastructure/http/application'
import type { FastifyInstance } from 'fastify'

export function configureHealthRouter(
  instance: FastifyInstance,
  application: Application
): void {
  instance.get('/', async (_request, reply) => {
    reply.status(200).send({
      status: 'healthy',
      web_server: {
        environment: application.environment.runtime
      }
    })
  })
}
