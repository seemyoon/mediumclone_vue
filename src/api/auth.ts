import axios from "@/api/axios";
import { RegisterInterface } from "@/interfaces/register.interface";

const register = (credentials: RegisterInterface) => {
  return axios.post("/users", { user: credentials }); //In the request body, we send the user data (credentials) inside the object { user: credentials }, because the server expects data in this format ({ user: ... })
};

export default { register };
