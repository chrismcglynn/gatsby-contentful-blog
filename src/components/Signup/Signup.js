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
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setValid(re.test(String(email).toLowerCase()));
  }

  function renderSignUp() {
    if (!close) {
      return (
        <div className={styles.container}>
          <input
            className={isValid ? styles.validEmailInput : styles.emailInput}
            onKeyUp={validateEmail}
            onClick={function() {
              setFocus(true);
            }}
            placeholder="Sign Up For Our Newsletter!"
            user-scalable={0}
          />
          {isValid && isFocused ? (
            <FontAwesomeIcon
              className={styles.sendIcon}
              icon={faArrowAltCircleRight}
              onClick={function() {
                setClose(true);
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faTimes}
              className={styles.closeButton}
              onClick={function() {
                setClose(true);
              }}
            />
          )}
        </div>
      );
    } else {
      return null;
    }
  }

  return <div className={styles.signUpForm}>{renderSignUp()}</div>;
}
