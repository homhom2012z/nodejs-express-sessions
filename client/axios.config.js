import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

export default axios;
