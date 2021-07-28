import request from 'superagent';

const URL = 'https://hey-arnold-api.herokuapp.com/api/v1/characters';

/* eslint-disable max-len */
export const fetchCharacters = async () => {
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=100');
  const json = await res.json();
  // console.log(json);
  return json;
};

export async function getCharacter(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}

// {
//   info: {},
//   results: [{ id, name, species, status, image }]
// }
