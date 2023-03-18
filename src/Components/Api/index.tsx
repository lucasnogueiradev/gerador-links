import axios from "axios";

const api = axios.create({
  baseURL: "https://v5.chatpro.com.br/chatpro-ed6eb1d359/api/v1",
});

export default api;
