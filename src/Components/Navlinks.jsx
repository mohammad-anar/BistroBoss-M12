import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../Hooks/useCart";

const Navlinks = () => {
  const [cart] = useCart();
  return (
    <>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) => {
          return isPending
            ? "Pending"
            : isActive
            ? "underline  text-[#EEFF25]"
            : "";
        }}
      >
        Home
      </NavLink>
      <NavLink
        to={"/ourmenu"}
        className={({ isActive, isPending }) => {
          return isPending
            ? "Pending"
            : isActive
            ? "underline  text-[#EEFF25]"
            : "";
        }}
      >
        Our menu
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive, isPending }) => {
          return isPending
            ? "Pending"
            : isActive
            ? "underline  text-[#EEFF25]"
            : "";
        }}
      >
        Contact Us
      </NavLink>
      <NavLink
        to={"/dashboard"}
        className={({ isActive, isPending }) => {
          return isPending
            ? "Pending"
            : isActive
            ? "underline  text-[#EEFF25]"
            : "";
        }}
      >
        Dashboard
      </NavLink>

      <NavLink
        to={`/ourshop/salad`}
        className={({ isActive, isPending }) => {
          return isPending
            ? "Pending"
            : isActive
            ? "underline text-[#EEFF25] flex items-center"
            : " flex items-center";
        }}
      >
        Our shop
      </NavLink>
      <NavLink
        to={`/dashboard/carts`}
        className={({ isActive, isPending }) => {
          return isPending
            ? "Pending"
            : isActive
            ? "underline text-[#EEFF25] flex items-center"
            : " flex items-center";
        }}
      >
        <div className="relative mr-4">
          <FaCartShopping size={20} />
          <div className="rounded-full bg-yellow-300 text-red-500 text-xs absolute top-3 left-3 p-1 w-6 h-6 flex items-center justify-center">
            {cart?.length}
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Navlinks;
