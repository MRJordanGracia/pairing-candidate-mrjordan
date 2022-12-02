import { getFilms, getFilmById } from '../services/swapi-api.mjs';

export default async function filmsPlugin(fastify) {
  /**
   * ROUTES
   */
  fastify.get('/films', async () => {
    const pokemons = await getFilms();
    return pokemons;
  });

  fastify.get('/films/:id', async (req) => {
    const person = await getFilmById(req.params.id);
    return person;
  });
}
