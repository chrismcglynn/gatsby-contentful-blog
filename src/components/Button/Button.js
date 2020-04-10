import React from "react";
import { Icon, IconsForIconName } from "../Icon/Icon";
import styles from "./Button.module.css";

export default function Button({ label, icon, className, onClick, iconOnly, iconClass, disabled }) {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-labe={label}
    >
    { icon ? <Icon icon={IconsForIconName[icon]} className={`${styles[iconClass]} ${className}`} /> : null}
    { iconOnly
      ? <span className={styles.buttonTooltip}>{label}</span>
      : label
    }
    </button>
  );
}
