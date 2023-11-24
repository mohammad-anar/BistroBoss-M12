import axios from "axios";
import { useNavigate } from "react-router-dom";
import useMyContext from "./useMyContext";

const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-psi-six.vercel.app",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {logOut} = useMyContext();
  //   request interceptor to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token")
    config.headers.authorization = `Bearer ${token}`
    return config
  }, (error) => {
    Promise.reject(error)
  });

// response interceptors (401) and (401) status
axiosSecure.interceptors.response.use((res) => {
  return res
}, async (err) => {
  // for 401 and 403 logout the user and send to the log in page 
  const status = err.response.status;
  console.log(status);
  if(status===401 || status === 403){
    await logOut();
    navigate("/signin")
  }

  return Promise.reject(err)
})


  return axiosSecure;
};

export default useAxiosSecure;
