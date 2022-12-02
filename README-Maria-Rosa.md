# pairing-candidate-maria-rosa

It was not possible for me to access to Pokémon urls from my computer, so I searched for other public API and in this case the one that
I used is https://swapi.py4e.com/api, the documentation about the API can be find here https://swapi.py4e.com/documentation.
The two endpoints used here in the test are https://swapi.py4e.com/api/people (get all the individual person or character within the Star Wars universe) and https://swapi.py4e.com/api/films (get all the film resources of Star Wars). It is accessible out of the vpn.

Regarding the suggested improvements:

- Capitalizing the `name` of the pokémon: `bulbasur` -> `Bulbasur`. In my case the names of the characters where already in capital letter, what I've done is convert to lower case the first letter of the name.
- Manage limit and offset query params on the `GET /pokemons` endpoint. In my case the API accepts as query param `search`, in case of the people endpoint is searching by name.

I've created a folder utils with a file with some utils functionalities.

## Link of interests

- [Swapi api](https://swapi.py4e.com/documentation).
