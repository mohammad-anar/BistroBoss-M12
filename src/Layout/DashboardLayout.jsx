import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import {
  MdContactMail,
  MdOutlinePayments,
  MdReviews,
  MdShoppingBag,
} from "react-icons/md";
import {
  FaBook,
  FaCartShopping,
  FaList,
  FaSwatchbook,
  FaUsers,
} from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdOutlineMenu } from "react-icons/md";
import Navbar from "../Components/Navbar";
import useCart from "../Hooks/useCart";
import useGetAdmin from "../Hooks/useGetAdmin";

const DashboardLayout = () => {
  const [carts] = useCart();
  // ToDo: get admin value from the database
  const [isAdmin] = useGetAdmin();
  
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-between items-start gap-6 min-h-screen">
        <div className="basis-[350px] bg-[#D1A054] ">
          <div className="px-8 p-6 min-h-screen h-full  ">
            <div className=" mb-6 font-serif">
              <h2 className="text-2xl font-extrabold uppercase">Bistro Boss</h2>
              <h4 className="text-xl tracking-[7px] font-medium leading-5 ">
                Restaurant
              </h4>
            </div>
            {isAdmin ? (
              <>
                <div className="uppercase text-base flex font-medium flex-col gap-6 p-4 text-[#151515]">
                  {/* user home  */}
                  <NavLink
                    to={"adminhome"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "underline text-white w-full"
                        : "w-full"
                    }
                  >
                    <span className="flex items-center gap-4">
                      <AiFillHome size={25}></AiFillHome>Admin Home
                    </span>
                  </NavLink>
                  {/* reservation  */}
                  <NavLink
                    to={"additems"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "underline text-white w-full"
                        : "w-full"
                    }
                  >
                    <span className="flex items-center gap-4">
                      <GiForkKnifeSpoon size={22}></GiForkKnifeSpoon>Add Items
                    </span>
                  </NavLink>
                  {/* payment History  */}
                  <NavLink
                    to={"manageitems"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "underline text-white w-full"
                        : "w-full"
                    }
                  >
                    <span className="flex items-center gap-4">
                      <FaList size={22}></FaList>Manage Items
                    </span>
                  </NavLink>
                  {/* my cart */}
                  <NavLink
                    to={"bookings"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "underline text-white w-full"
                        : "w-full"
                    }
                  >
                    <span className="flex items-center gap-4">
                      <FaBook size={22}></FaBook>Manage Bookings
                    </span>
                  </NavLink>
                  {/*Ad Review */}
                  <NavLink
                    to={"users"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "underline text-white w-full"
                        : "w-full"
                    }
                  >
                    <span className="flex items-center gap-4">
                      <FaUsers size={22}></FaUsers>All Users
                    </span>
                  </NavLink>
                </div>
              </>
            ) : (
              <div className="uppercase text-base flex font-medium flex-col gap-6 p-4 text-[#151515]">
                {/* user home  */}
                <NavLink
                  to={"userhome"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "underline text-white w-full"
                      : "w-full"
                  }
                >
                  <span className="flex items-center gap-4">
                    <AiFillHome size={25}></AiFillHome>User Home
                  </span>
                </NavLink>
                {/* reservation  */}
                <NavLink
                  to={"reservation"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "underline text-white w-full"
                      : "w-full"
                  }
                >
                  <span className="flex items-center gap-4">
                    <FaCalendarAlt size={22}></FaCalendarAlt>Reservation
                  </span>
                </NavLink>
                {/* payment History  */}
                <NavLink
                  to={"paymenthistory"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "underline text-white w-full"
                      : "w-full"
                  }
                >
                  <span className="flex items-center gap-4">
                    <MdOutlinePayments size={22}></MdOutlinePayments>Payment
                    History
                  </span>
                </NavLink>
                {/* my cart */}
                <NavLink
                  to={"carts"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "underline text-white w-full"
                      : "w-full"
                  }
                >
                  <span className="flex items-center gap-4">
                    <FaCartShopping size={22}></FaCartShopping>My Cart (
                    {carts.length})
                  </span>
                </NavLink>
                {/*Ad Review */}
                <NavLink
                  to={"reviews"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "underline text-white w-full"
                      : "w-full"
                  }
                >
                  <span className="flex items-center gap-4">
                    <MdReviews size={22}></MdReviews>Add Reviews
                  </span>
                </NavLink>
                {/* My Bookings */}
                <NavLink
                  to={"mybookings"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "underline text-white w-full"
                      : "w-full"
                  }
                >
                  <span className="flex items-center gap-4">
                    <FaSwatchbook size={22}></FaSwatchbook>My Bookings
                  </span>
                </NavLink>
              </div>
            )}
            <div className="divider"></div>
            <div className="uppercase text-base p-4 flex font-medium flex-col gap-6 text-[#151515]">
              {/*  home  */}
              <NavLink
                to={"home"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "underline text-white w-full"
                    : "w-full"
                }
              >
                <span className="flex items-center gap-4">
                  <AiFillHome size={25}></AiFillHome>Home
                </span>
              </NavLink>
              {/*  menu  */}
              <NavLink
                to={"menu"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "underline text-white w-full"
                    : "w-full"
                }
              >
                <span className="flex items-center gap-4">
                  <MdOutlineMenu size={25}></MdOutlineMenu>Menu
                </span>
              </NavLink>
              {/*  shop  */}
              <NavLink
                to={"shop"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "underline text-white w-full"
                    : "w-full"
                }
              >
                <span className="flex items-center gap-4">
                  <MdShoppingBag size={25}></MdShoppingBag>Shop
                </span>
              </NavLink>
              {/*  contact  */}
              <NavLink
                to={"contact"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "underline text-white w-full"
                    : "w-full"
                }
              >
                <span className="flex items-center gap-4">
                  <MdContactMail size={20}></MdContactMail>Contact
                </span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="p-4 pt-2 w-full flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
