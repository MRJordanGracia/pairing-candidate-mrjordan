# pairing-candidate-maria-rosa

It was not possible for me to access to Pokémon urls from my computer, so I searched for other public API and in this case the one that
I used is https://swapi.dev/api, the documentation about the API can be find here https://swapi.dev/documentation.
The two endpoints used here in the test are https://swapi.dev/api/people (get all the individual person or character within the Star Wars universe) and https://swapi.dev/api/films (get all the film resources of Star Wars).

Regarding the suggested improvements:

- Capitalizing the `name` of the pokémon: `bulbasur` -> `Bulbasur`. In my case the names of the characters where already in capital letter, what I've done is convert to lower case the first letter of the name.
- Manage limit and offset query params on the `GET /pokemons` endpoint. In my case the API accepts as query param search, in case of people endpoint should be the name.

## Link of interests

- [Swapi api](https://swapi.dev/documentation).
