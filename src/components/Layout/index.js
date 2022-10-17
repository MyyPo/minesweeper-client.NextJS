import styles from "./Layout.module.css";
import Router from "next/router";

import ProfileIcon from "./svgs/profile-icon.svg";
import LogoutIcon from "./svgs/logout-icon.svg";
import useAuthContext from "../../hooks/useAuthContext";

function Layout() {
  const { status } = useAuthContext();

  // this function calls backend endpoint removing http-only and non-http-only cookies
  // by setting their expiration time to Date.now()
  async function handleLogout() {
    const response = await fetch(process.env.NEXT_PUBLIC_API_AUTH_LOGOUT, {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      Router.reload();
    } else {
      await response.json();
      console.log(response.msg);
    }
  }

  return (
    <>
      {/* show profile and logout button only if the user is authenticated */}
      {status && (
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
