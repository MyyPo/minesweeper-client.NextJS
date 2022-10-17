import AuthContext from "../../context/AuthContext/AuthContext";
import { useContext } from "react";

export default function useAuthContext() {
  const status = useContext(AuthContext);
  if (status === undefined) {
    throw new Error("useAuthContext can only be used inside AuthProvider");
  }
  return status;
}
