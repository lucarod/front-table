import axios from "axios";

export const api = axios.create({
  baseURL: 'https://front-table.netlify.app/',
})
