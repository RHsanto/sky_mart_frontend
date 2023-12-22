import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="container mx-auto m-10">
      <div className="mx-auto w-96 bg-gray-200">
        <div className="  p-5">
          <>
            {/* <p className="text-danger">{error}</p> */}
            <input
              type="text"
              // value={userName}
              // onChange={e => setUserName(e.target.value)}
              className="p-3 border w-full outline-none border-blue-600 rounded"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              // value={email}
              // onChange={e => setEmail(e.target.value)}
              className="p-3 border w-full outline-none border-blue-600 rounded my-5"
              placeholder="name@example.com"
            />
            <input
              type="password"
              // value={password}
              // onChange={e => setPassword(e.target.value)}
              className="p-3 border w-full outline-none border-blue-600 rounded"
              placeholder="Password"
            />
            <button className="btn btn-info uppercase w-full mt-10 mb-5  text-white">
              Register
            </button>
          </>
          <p>
            I'm already a member?{" "}
            <Link to="/login" className="text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
