import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

const Login = () => {
  const { setUserData } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";
  const handleLogin = async () => {
    try {
      const response = await axios.post("https://sky-mart-servers.onrender.com/auth/login", {
        email,
        password,
      });

      const { user } = response.data || {};
      localStorage.setItem("token", user?.token);
      setUserData(user);
      localStorage.setItem("userData", JSON.stringify(user));
      navigate(redirect_uri);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className="container mx-auto m-10">
      <div className="mx-auto w-96 bg-gray-200">
        <div className="  p-5">
          <>
            <p className="text-center text-red-600">{error}</p>
            <input
              required
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="p-3 border w-full outline-none border-blue-600 rounded my-5"
              placeholder="name@example.com"
            />
            <input
              required
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="p-3 border w-full outline-none border-blue-600 rounded"
              placeholder="Password"
            />

            <button
              onClick={handleLogin}
              className="btn btn-info uppercase w-full mt-10 mb-5 text-white"
            >
              Sign In
            </button>
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
