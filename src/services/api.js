import axios from "axios";

export const api = axios.create({
  baseURL: 'https://front-table-json-server.herokuapp.com/',
})
