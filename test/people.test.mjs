import { test } from 'tap';
import appBuilder from '../src/app.mjs';

test('GET /people', async (t) => {
  const app = appBuilder();

  const response = await app.inject({
    method: 'GET',
    url: '/people',
  });

  t.equal(response.json()[0].name, 'luke Skywalker');

  t.equal(response.statusCode, 200, 'returns a status code of 200');
});
