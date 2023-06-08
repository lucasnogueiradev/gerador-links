import axios from "axios";

const api = axios.create({
  baseURL: "https://v5.chatpro.com.br/chatpro-7eb864dc41/api/v1",
});

export default api;
