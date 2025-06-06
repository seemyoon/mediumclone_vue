import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/api";

axios.defaults.headers.common["x-api-key"] = "reqres-free-v1";
export default axios;
