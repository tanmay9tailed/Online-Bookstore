import React, { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  const checkUserExists = async (username) => {
    try {
      const response = await fetch("http://localhost:3000/check-username", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
      const data = await response.json();
      return data.exists;
    } catch (error) {
      console.error("Failed to check username:", error);
      return false;
    }
  };

  const createUser = async (email, password, username) => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, username }),
      });
      const data = await response.json();
      if (response.ok) {
        setUser({ userId: data.userId });
      }
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      console.error("Failed to create user:", error);
      throw new Error("Failed to create user");
    }
  };

  const login = async (username, password) => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setUser({ userId: data.userId });
        // localStorage.setItem("authToken", "dummyToken"); // Example: Set a dummy token for illustration
      }
      if(response.status === 400){
        setLoading(false);
        return "error"
      }
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      console.error("Login failed:", error);
      throw new Error("Login failed");
    }
  };

  const logout = () => {
    // localStorage.removeItem("authToken");
    setUser(null);
    // navigate("/login");
  };

  const getUserDetails = async (userId) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/getUserData?user=${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      console.error("Failed to get user details:", error);
      throw new Error("Failed to get user details");
    }
  };
  

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // You can add token validation logic here if needed
      setUser({ userId: "dummyUserId" }); // Example: Set a dummy user ID for illustration
    }
    setLoading(false);
  }, []);

  const authInfo = {
    createUser,
    user,
    login,
    logout,
    loading,
    checkUserExists,
    getUserDetails
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
