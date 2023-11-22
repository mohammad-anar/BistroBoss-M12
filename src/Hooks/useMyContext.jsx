import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useMyContext = () => {
    const authValue = useContext(AuthContext)
    return authValue
};

export default useMyContext;