import styles from "./Auth.module.css";
import { useReducer } from "react";
import LoginIcon from "./svgs/login_icon.svg";
import RegisterIcon from "./svgs/register_icon.svg";

import Registration from "./registration";
import Login from "./login";
import {
  reducer,
  initialState,
  openLogin,
  openRegistration,
  closeWindow,
} from "./reducer";

function Auth() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openRegistrationHandler = () => {
    dispatch(openRegistration());
  };
  const openLoginHandler = () => {
    dispatch(openLogin());
  };
  const closeWindowHandler = () => {
    dispatch(closeWindow());
  };

  return (
    <div className={styles.auth_container}>
      {!state.loginWindow && !state.registrationWindow ? (
        <div className={styles.button_container}>
          <button onClick={openLoginHandler} className={styles.button_login}>
            <p className={styles.text}>
              <LoginIcon className={styles.login_icon} />
              Login
            </p>
          </button>
          <button
            className={styles.button_register}
            onClick={openRegistrationHandler}
          >
            <p className={styles.text}>
              <RegisterIcon className={styles.register_icon} />
              Register
            </p>
          </button>
        </div>
      ) : state.registrationWindow ? (
        <Registration closeWindowHandler={closeWindowHandler} />
      ) : (
        state.loginWindow && <Login closeWindowHandler={closeWindowHandler} />
      )}
    </div>
  );
}

export default Auth;
