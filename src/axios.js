import axios from 'axios';


const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/`
});


axiosClient.interceptors.request.use((config)=>{
  return config;
})

axiosClient.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response && error.response.status === 401) {
    window.location.reload();
    return error;
  }
  throw error;
})

export default axiosClient;
