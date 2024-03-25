import axios from "axios";

const BASE_URL = "https://interview-plus.onrender.com";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
