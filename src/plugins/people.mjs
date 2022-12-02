import { getAllPeople, getPeopleById } from '../services/swapi-api.mjs';
import { createOptions, convertValuesToLowerCase, isEmpty } from '../utils/utils.mjs';

export default async function peoplePlugin(fastify) {
  /**
   * ROUTES
   */
  fastify.get('/people', async (req) => {
    const people = await getAllPeople(
      isEmpty(req.query) ? {} : createOptions('searchParams', req.query)
    );
    return convertValuesToLowerCase(people.results, 'name');
  });

  fastify.get('/people/:id', async (req) => {
    const person = await getPeopleById(req.params.id);
    return person;
  });
}
