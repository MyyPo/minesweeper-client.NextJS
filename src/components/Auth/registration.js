import styles from "./Auth.module.css";
import { useRef, useState } from "react";
import Router from "next/router";

import Success from "./success";
import XIcon from "./svgs/x_icon.svg";

function Registration({ closeWindowHandler }) {
  const nameRef = useRef();
  const passwordRef = useRef();
  const [valid, setValid] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setError("");
    nameRef.current.value.length >= 3 && passwordRef.current.value.length >= 6
      ? setValid(true)
      : setValid(false);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(process.env.NEXT_PUBLIC_API_AUTH_REGISTER, {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nameRef.current.value,
        password: passwordRef.current.value,
      }),
    });
    if (response.ok) {
      // Show a success box and then reload the page if registration is completed
      setSuccess(true);
      setTimeout(Router.reload(), 4500);
    } else {
      setValid(false);
      setError(await (await response.json()).msg);
    }
  }
  return (
    <div className={styles.auth_form}>
      {!success ? (
        <>
          <button className={styles.close_button} onClick={closeWindowHandler}>
            <XIcon className={styles.x_icon} />
          </button>
          <form onSubmit={handleSubmit} className={styles.container_centered}>
            <p className={styles.form_text}>Quick registration</p>
            <div className={styles.input_container}>
              <input
                onChange={handleChange}
                id="name"
                ref={nameRef}
                className={styles.input}
                type="text"
                placeholder=" "
                minLength={3}
                maxLength={20}
                required
              />
              <label htmlFor="name" className={styles.input_label}>
                Put name
              </label>
            </div>
            <div className={styles.input_container}>
              <input
                onChange={handleChange}
                id="password"
                ref={passwordRef}
                className={styles.input}
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

            {/* Shows a button depending on ref values, if nothing is provided show a button asking to provide info */}
            {/* also shows a backend-provided error if backend replies with it */}
            {valid ? (
              <button type="submit" className={styles.commit_correct_button}>
                <span className={styles.commit_correct_text}>Done!</span>
              </button>
            ) : nameRef?.current?.value?.length > 0 &&
              nameRef?.current?.value?.length > 0 ? (
              <button type="submit" className={styles.commit_incorrect_button}>
                {error ? (
                  <span
                    className={styles.commit_incorrect_text}
                    style={{ fontSize: "17px" }}
                  >
                    {error}
                  </span>
                ) : (
                  <span className={styles.commit_incorrect_text}>
                    Something wrong...
                  </span>
                )}
              </button>
            ) : (
              <button type="submit" className={styles.commit_default_button}>
                <span className={styles.commit_default_text}>
                  Come up with something, pls...
                </span>
              </button>
            )}
          </form>
        </>
      ) : (
        <Success />
      )}
    </div>
  );
}

export default Registration;
