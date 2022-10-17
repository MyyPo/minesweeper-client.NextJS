import { useState, useEffect } from "react";
import getAuthCookie from "./getAuthCookie";
import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [status, setStatus] = useState("loading");
  useEffect(() => {
    const currentUser = getAuthCookie();
    if (currentUser) {
      setStatus("authenticated");
    } else {
      setStatus("unauthenticated");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ status }}>{children}</AuthContext.Provider>
  );
};
