import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5050/api/",
  baseURL: "https://mernestore.herokuapp.com/api/",
});

export default instance;
