import styles from "./Layout.module.css";
import Router from "next/router";

import ProfileIcon from "./svgs/profile-icon.svg";
import LogoutIcon from "./svgs/logout-icon.svg";
import useAuthContext from "../../hooks/useAuthContext";
import handleLogout from "../../utils/handleLogout";

function Layout() {
  const { status } = useAuthContext();

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
