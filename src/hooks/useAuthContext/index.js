import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

// check a non-http-only cookie that comes together with an http-only one to figure out if the user is logged in
// sets one of the strings "authenticated", "unauthenticated" as status
// default value is "loading"
export default function useAuthContext() {
  const status = useContext(AuthContext);
  if (status === undefined) {
    throw new Error("useAuthContext can only be used inside AuthProvider");
  }
  return status;
}
