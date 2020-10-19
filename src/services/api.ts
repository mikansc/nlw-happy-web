import axios from "axios";

const api = axios.create({
  baseURL: "https://mn-happy.herokuapp.com",
});

export default api;
