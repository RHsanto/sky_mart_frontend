// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

const Navbar = () => {
  const { userData, setUserData } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    // Remove userData only on logout
    if (userData) {
      localStorage.removeItem("userData");
    }
    setUserData(null);
  };

  return (
    <div className="border-b ">
      <div className="navbar_items container mx-auto p-2 flex justify-between items-center">
        <div>
          {" "}
          <Link to="/" className="text-3xl font-bold ">
            <span className="text-sky-500">Sky </span>Mart
          </Link>
        </div>
        <div>
          {" "}
          <Link to="/product" className="text-2xl font-bold">
            Products
          </Link>
        </div>
        <div>
          <div>
            {userData ? (
              <div>
                <button className="btn">{userData?.userName}</button>

                {userData?.email && (
                  <>
                    <button
                      className="btn btn-active bg-red-600 text-white ml-5"
                      onClick={handleLogout}
                    >
                      {" "}
                      Log out
                    </button>
                  </>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn btn-info text-white">Sign In</button>
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
