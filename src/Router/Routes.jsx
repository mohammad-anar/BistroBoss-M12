import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact";
import OurMenu from "../Pages/Menu/OurMenu";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import OurShop from "../Pages/OurShop/OurShop";
import Cart from "../Pages/Dashboard/Cart/Cart";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import AdminRoutes from "./AdminRoutes";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../Pages/Dashboard/ManageItems/UpdateItems";
import axios from "axios";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "ourmenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "ourshop/:category",
        element: <OurShop></OurShop>,
      },
    ],
  },
  {
    path: "/dashboard",
    element:<PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: "carts",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment/>
      },
      
      // admin routes starts 

      {
        path: "users",
        element: <AdminRoutes><ManageUsers/></AdminRoutes>,
      },
      
      {
        path: "additems",
        element: <AdminRoutes><AddItems/></AdminRoutes>
      },
      {
        path: "manageitems",
        element: <AdminRoutes><ManageItems/></AdminRoutes>
      },
      {
        path: "updateitem/:id",
        element: <AdminRoutes><UpdateItems/></AdminRoutes>,
        loader: ({params}) => axios.get(`http://localhost:5000/menus/${params.id}`)
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);

export default Routes;
