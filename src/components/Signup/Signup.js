import React, { useState } from "react";
import {
  faTimes,
  faArrowAltCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Signup.module.css";

export default function Signup() {
  const [close, setClose] = useState(false);
  const [isValid, setValid] = useState(false);
  const [isFocused, setFocus] = useState(false);

  function validateEmail(e) {
    const email = e.target.value;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
    setValid(re.test(String(email).toLowerCase()));
  }

  function renderSignUp() {
    console.log('isFocused: ', isFocused)
    console.log('isValid: ', isValid)
    if (!close) {
      return (
        <div className={styles.container}>
          {!isFocused ? (
            <div className={styles.header}>
              <span>Sign Up For Our Newsletter!</span>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={function() {
                  setClose(true);
                }}
                className={styles.closeButton}
              />
            </div>
          ) : null}

          <div className={styles.inputWrapper}>
            <input
              className={isValid ? styles.validEmailInput : styles.emailInput}
              onKeyUp={validateEmail}
              onClick={function () { setFocus(true); }}
              placeholder="email:"
              user-scalable={0}
            />
            {!isValid && isFocused ? (
              <FontAwesomeIcon
              icon={faTimes}
              onClick={function() {
                setClose(true);
              }}
              className={styles.closeButton}
            />
            ) : null}
            {isValid && isFocused && (
              <FontAwesomeIcon
              className={styles.sendIcon}
              icon={faArrowAltCircleRight}
            />
            )}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  return renderSignUp();
}
