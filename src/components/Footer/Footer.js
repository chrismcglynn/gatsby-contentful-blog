import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.copyrightContainer}>
        <span className={styles.copyright}>
          © {new Date().getFullYear()},
        </span>
        <span className={styles.footerText}>
          Made with 💙 from Charlotte, NC
        </span>
      </div>
    </footer>
  );
}
