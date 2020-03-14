import React, { useState } from "react";
import styles from "./Signup.module.css";

export default function Signup() {
  const [close, setClose] = useState(false);

  function renderSignUp () {
    if (!close) {
      return (
        <div className={styles.container}>
        <div className={styles.header}>
          <span>Sign Up For Our Newsletter!</span>
          <div onClick={function () { setClose(true); }} className={styles.mdiv}>
            <div className={styles.md}></div>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <input placeholder="email:" user-scalable={0} />
          <button>Submit</button>
        </div>
      </div>
      )
    } else {
      return null;
    }
  }

  return (renderSignUp())
}
