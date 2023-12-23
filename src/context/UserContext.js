import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  userData: null,
  setUserData: () => {},
});

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const storedUserData = localStorage.getItem("userData");
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      setUserData(true);
      axios
        .get("http://localhost:8000/auth/user", { headers: { authorization: token } })
        .then(res => {
          if (res.data?.user) {
            setUserData(res.data?.user);
          }
        })
        .catch(err => {
          console.log("Error fetching current user", err);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
