import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

const Registration = () => {
  const { setUserData } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";

  const handleRegister = async () => {
    try {
      const response = await axios.post("https://sky-mart-servers.onrender.com/auth/register", {
        email,
        password,
        userName,
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
            <p className="text-center text-red-600 py-4">{error}</p>

            <input
              required
              type="text"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              className="p-3 border w-full outline-none border-blue-600 rounded"
              placeholder="Enter Your Name"
            />
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
              onClick={handleRegister}
              className="btn btn-info uppercase w-full mt-10 mb-5  text-white"
            >
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
