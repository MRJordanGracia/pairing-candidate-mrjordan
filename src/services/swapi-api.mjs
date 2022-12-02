import got from 'got';

const apiBaseURL = 'https://swapi.dev/api';

const gotInstance = got.extend({ prefixUrl: apiBaseURL });

export async function getAllPeople(options = {}) {
  const res = await gotInstance.get('people', options).json();

  return res;
}

export async function getPeopleById(id, options = {}) {
  const res = await gotInstance.get(`people/${id}`, options).json();

  return res;
}

export async function getFilms(options = {}) {
  const res = await gotInstance.get('films', options).json();

  return res;
}

export async function getFilmById(id, options = {}) {
  const res = await gotInstance.get(`films/${id}`, options).json();

  return res;
}
