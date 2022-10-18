import styles from "./Layout.module.css";
import Router from "next/router";

import ProfileIcon from "./svgs/profile-icon.svg";
import LogoutIcon from "./svgs/logout-icon.svg";
import useAuthContext from "../../hooks/useAuthContext";

function Layout() {
  const { status, setStatus } = useAuthContext();

  // this function calls backend endpoint removing http-only and non-http-only cookies
  // by setting their expiration time to Date.now()
  async function handleLogout(e) {
    e.preventDefault();
    const response = await fetch(process.env.NEXT_PUBLIC_API_AUTH_LOGOUT, {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setStatus("unauthenticated");
    } else {
      // if the server for some reason fails to remove the cookie try to remove it yourself
      document.cookie = "expires= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      Router.reload();
    }
  }

  return (
    <>
      {/* show profile and logout button only if the user is authenticated */}
      {status === "authenticated" && (
        <div className={styles.layout_container}>
          <button className={styles.layout_button}>
            {/* might implement profile later, I cope */}
            <ProfileIcon />
          </button>
          <button onClick={handleLogout} className={styles.layout_button}>
            <LogoutIcon />
          </button>
        </div>
      )}
    </>
  );
}

export default Layout;
