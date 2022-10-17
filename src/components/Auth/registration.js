import styles from "./Auth.module.css";
import { useRef, useState } from "react";

import XIcon from "./svgs/x_icon.svg";

function Registration({ closeWindowHandler }) {
  const nameRef = useRef();
  const passwordRef = useRef();
  const [valid, setValid] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    nameRef.current.value.length >= 3 && passwordRef.current.value.length >= 6
      ? setValid(true)
      : setValid(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      name: nameRef.current.value,
      password: passwordRef.current.value,
    });
  }
  console.log(nameRef);
  return (
    <div className={styles.auth_form}>
      <button className={styles.close_button} onClick={closeWindowHandler}>
        <XIcon className={styles.x_icon} />
      </button>
      <form onSubmit={handleSubmit} className={styles.form_container}>
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

        {/* Show a button depending on ref values, if nothing is provided show a button asking to provide info */}
        {valid ? (
          <button type="submit" className={styles.commit_correct_button}>
            <span className={styles.commit_correct_text}>Done!</span>
          </button>
        ) : nameRef?.current?.value?.length > 0 &&
          nameRef?.current?.value?.length > 0 ? (
          <button type="submit" className={styles.commit_incorrect_button}>
            <span className={styles.commit_incorrect_text}>
              Something wrong...
            </span>
          </button>
        ) : (
          <button type="submit" className={styles.commit_default_button}>
            <span className={styles.commit_default_text}>
              Come up with something, pls...
            </span>
          </button>
        )}
      </form>
    </div>
  );
}

export default Registration;
