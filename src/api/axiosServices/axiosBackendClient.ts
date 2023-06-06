import axios from "axios";
import { useNavigate } from "react-router";

export const axiosBackendClient = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL + "/api" || "http://localhost:9090/api/v1",
  withCredentials: true,
})

axiosBackendClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401 || error.response.status === 500) {
      window.location.href = '/login';
    }
  });

export default axiosBackendClient;
