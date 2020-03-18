import React from "react";
import {  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Button.module.css";

export default function Button({ label, icon, className }) {
  return (
    <button className={`${styles.button} ${className}`}>
      {label}<span>{icon}</span>
    </button>
  );
}