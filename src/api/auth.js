import axios from "@/api/axios";

const register = (credentials) => {
  // return axios.post("/users", { user: credentials }); //In the request body, we send the user data (credentials) inside the object { user: credentials }, because the server expects data in this format ({ user: ... })
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          user: {
            email: credentials.email,
            username: credentials.username,
            token: "mock_access_token_12345",
            refreshToken: "mock_refresh_token_67890",
          },
        },
      });
    }, 300);
  });
};

export default { register };
