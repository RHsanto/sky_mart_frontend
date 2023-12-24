// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { GiShoppingCart } from "react-icons/gi";
import { SiSky } from "react-icons/si";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { clearCartAction, useCart } from "../../../context/CartContext";

const Navbar = () => {
  const { userData, setUserData } = useContext(UserContext);
  const { state, dispatch } = useCart();

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    userData && localStorage.removeItem("userData");
    setUserData(null);
    dispatch(clearCartAction());
  };

  return (
    <div className="border-b p-5 top-0 z-[9999] bg-white sticky">
      {/* Navbar container */}
      <div className=" navbar_items container mx-auto  flex justify-between items-center">
        {/* Logo and home link */}
        <div>
          {" "}
          <Link to="/" className="text-3xl font-bold flex items-center">
            <SiSky className="text-sky-500 text-5xl" />
            Mart
          </Link>
        </div>

        {/* User and Cart actions */}
        <div className="flex gap-4 items-center">
          <Link to="/cart">
            <div className="indicator">
              <span className="indicator-item badge badge-info text-white">
                {state?.cart?.length}
              </span>
              <button className="border border-black rounded-full p-2">
                <GiShoppingCart className="text-3xl" />
              </button>
            </div>
          </Link>
          {/* User actions */}
          <div className="hidden md:block">
            {userData ? (
              <div>
                {/* User profile button */}
                <button className="btn">
                  <FaUserAlt className="text-lg" /> {userData?.userName?.split(" ")[0]}
                </button>
                {/* Logout button */}
                {userData?.email && (
                  <>
                    <button
                      className="btn uppercase bg-red-600 text-white ml-5"
                      onClick={handleLogout}
                    >
                      {" "}
                      <RiLogoutCircleLine className="text-lg" /> Log out
                    </button>
                  </>
                )}
              </div>
            ) : (
              <>
                {/* Sign In link for unauthenticated users */}
                <Link to="/login">
                  <button className="btn btn-info text-white uppercase">
                    {" "}
                    <FaSignInAlt className="text-lg" /> Sign In
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
