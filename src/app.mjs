import fastify from 'fastify';
import filmsPlugin from './plugins/films.mjs';
import helloWorldPlugin from './plugins/hello-world.mjs';
import peoplePlugin from './plugins/people.mjs';

export default function build(opts = {}) {
  const app = fastify(opts);

  app.register(filmsPlugin);
  app.register(helloWorldPlugin);
  app.register(peoplePlugin);

  app.setErrorHandler((error, request, reply) => {
    request.log.error(error, 'Error happened:');

    reply
      .code(error.statusCode || 500)
      .type('application/json')
      .send({ error: 'Something wrong happened!' });
  });

  return app;
}
