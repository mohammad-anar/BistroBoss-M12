import { Navigate } from "react-router-dom";
import useGetAdmin from "../Hooks/useGetAdmin";
import useMyContext from "../Hooks/useMyContext";
import { FadeLoader } from "react-spinners";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useMyContext();
  const [isAdmin, isAdminLoading] = useGetAdmin();

  if (loading || isAdminLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <FadeLoader color="tomato" />
      </div>
    );
  }

  // if user and admin return children
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/"} state={location.pathname}></Navigate>;
};

export default AdminRoutes;
