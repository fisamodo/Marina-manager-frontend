import axios from "axios";

export const axiosBackendClient = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL + "/api" || "http://localhost:9090/api/v1",
});
