import styles from "./Auth.module.css";
import { useRef, useState } from "react";

import useAuthContext from "../../hooks/useAuthContext";
import XIcon from "./svgs/x_icon.svg";
import Router from "next/router";

function Login({ closeWindowHandler }) {
  const nameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    setError(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await fetch(process.env.NEXT_PUBLIC_API_AUTH_LOGIN, {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nameRef.current.value,
        password: passwordRef.current.value,
      }),
    });
    if (response.ok) {
      Router.reload();
      // response = await response.json();
    } else {
      setError(true);
    }
  }

  return (
    <div className={styles.auth_form}>
      <button className={styles.close_button} onClick={closeWindowHandler}>
        <XIcon className={styles.x_icon} />
      </button>
      <form onSubmit={handleSubmit} className={styles.form_container}>
        <p className={styles.form_text}>Login form</p>
        <div className={styles.input_container}>
          <input
            id="name"
            ref={nameRef}
            onChange={handleChange}
            className={!error ? styles.input : styles.input_wrong_credentials}
            type="text"
            placeholder=" "
            minLength={3}
            maxLength={20}
            required
          />
          <label htmlFor="name" className={styles.input_label}>
            Account name
          </label>
        </div>
        <div className={styles.input_container}>
          <input
            id="password"
            ref={passwordRef}
            onChange={handleChange}
            className={!error ? styles.input : styles.input_wrong_credentials}
            type="password"
            placeholder=" "
            minLength={6}
            maxLength={20}
            required
          />
          <label htmlFor="passowrd" className={styles.input_label}>
            Password
          </label>
        </div>

        <button
          type="submit"
          className={
            !error
              ? styles.commit_default_button
              : styles.commit_incorrect_button
          }
        >
          {!error ? (
            <span
              className={styles.commit_default_text}
              style={{ fontSize: "25px" }}
            >
              Log in
            </span>
          ) : (
            <span className={styles.commit_incorrect_text}>
              Wrong credentials
            </span>
          )}
        </button>
      </form>
    </div>
  );
}

export default Login;
