import { Link } from "react-router-dom";
import useMyContext from "../Hooks/useMyContext";
import logo from "../assets/logo.png";
import profile from "../assets/others/profile.png";

import Navlinks from "./Navlinks";

const Navbar = () => {
  const { user, logOut } = useMyContext();
  return (
    <div className="drawer z-[10000] max-w-6xl mx-auto fixed top-0 left-auto shadow-sm">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-black bg-opacity-20 px-8">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 gap-2 py-2">
            <img className="w-12" src={logo} alt="" />
            <div>
              <h2 className="text-xl tracking-[2px] font-bold font-serif text-white">
                Bistro Boss
              </h2>
              <h4 className="text-lg tracking-[5px] font-medium leading-5 font-serif text-white">
                Restaurant
              </h4>
            </div>
          </div>
          <div className="flex-none hidden lg:block">
            <div className="menu menu-horizontal gap-4 font-semibold items-center text-white">
              {<Navlinks></Navlinks>}
              {user ? (
                <div className="flex items-center gap-2 font-semibold text-base">
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0}>
                      <img
                        className="w-8 p-0 rounded-full border-2 border-white h-8"
                        src={user.photoURL ? user?.photoURL : profile}
                        alt="profile"
                      />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu mt-6 p-2 py-6 shadow bg-black bg-opacity-60 -mr-6 rounded-box w-64"
                    >
                      <li>
                        <div className="flex flex-col">
                          <div className="text-center border-b-2 text-white pb-2 mb-4">
                            <img
                              className="w-20 mx-auto p-0 rounded-full  h-20"
                              src={user.photoURL ? user?.photoURL : profile}
                              alt="profile"
                            />
                            <h2 className="text-2xl font-bold items-center">
                              {user?.displayName}
                            </h2>
                            <p className="text-sm">{user?.email}</p>
                          </div>
                          <button
                            className="text-amber-400 btn-outline rounded-xl hover:border-white text-center btn btn-ghost hover:text-white  btn-sm"
                            onClick={logOut}
                          >
                            Log Out
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link to={"/signin"}>
                  <button className="btn btn-ghost">Sign in</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
