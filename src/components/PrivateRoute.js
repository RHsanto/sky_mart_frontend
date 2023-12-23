import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { loading, userData } = useContext(UserContext);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return userData?.email ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
