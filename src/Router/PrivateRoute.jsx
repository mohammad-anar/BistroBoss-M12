import { Navigate, useLocation } from "react-router-dom";
import useMyContext from "../Hooks/useMyContext";
import { FadeLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user , loading} = useMyContext();
  const location = useLocation();

  if(loading){
    return <div className="min-h-screen flex items-center justify-center">

    <FadeLoader color="black" />
  </div>
  }
  
  if(user){
    return children
  }
  return <Navigate to={"/signin" } state={location.pathname}></Navigate>
};

export default PrivateRoute;
