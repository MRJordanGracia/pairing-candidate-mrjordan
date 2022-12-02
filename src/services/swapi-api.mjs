import got from 'got';
import CONSTANTS from '../utils/constants.mjs';

const { ENPOINT_URL } = CONSTANTS;
const apiBaseURL = ENPOINT_URL;

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
