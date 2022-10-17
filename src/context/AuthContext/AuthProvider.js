import { useState, useEffect } from "react";
import getAuthCookie from "./getAuthCookie";
import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [status, setStatus] = useState(null);
  useEffect(() => {
    const currentUser = getAuthCookie();
    setStatus(currentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ status }}>{children}</AuthContext.Provider>
  );
};
