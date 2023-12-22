import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto m-10">
      <div className="mx-auto w-96 bg-gray-200">
        <div className="  p-5">
          <>
            {/* <p className="text-danger">{error}</p> */}
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

            <button className="btn btn-info uppercase w-full mt-10 mb-5 text-white">Sign In</button>
          </>
          <p>
            Not a member?{" "}
            <Link to="/register" className="text-blue-500">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
