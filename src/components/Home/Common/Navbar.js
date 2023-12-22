import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <button className="btn btn-info uppercase text-white">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
