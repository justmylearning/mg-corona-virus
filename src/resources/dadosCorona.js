import axios from 'axios';

export const getDadosPorPais = (nomePais) =>
  axios({
    method: 'GET',
    url: 'https://covid-19-data.p.rapidapi.com/country',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
      'x-rapidapi-key': 'd4e58ccd68mshb368100837e7f46p10c115jsn5f67b8dea6e2',
    },
    params: {
      format: 'json',
      name: nomePais.toString().toLowerCase(),
    },
  });
