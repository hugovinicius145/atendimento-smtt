import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-agendamentosmtt.cfapps.io/api/v1/',
});

export default api;
