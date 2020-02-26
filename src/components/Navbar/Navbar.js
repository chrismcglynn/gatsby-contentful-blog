import React, { useState } from 'react';
import { Link } from 'gatsby';
import { navConfig } from './navConfig';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  if (!toggle) {
    document.body.style.overflow = '';
  } else if (toggle) {
    document.body.style.overflow = 'hidden';
  }

  function renderLinks() {
    return navConfig.map((link, idx) => (
      <Link
        key={`list-${link}-${idx}`}
        onClick={() => setToggle(false)}
        className={
          !toggle ? `${styles.navItem}` : `${styles.navItem} ${styles.fade}`
        }
        to={link.path}
      >
        {link.name}
      </Link>
    ));
  }

  return (
    <div className={styles.nav}>
      <div
        onClick={() => (!toggle ? setToggle(true) : setToggle(false))}
        className={styles.hamburger}
      >
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <div
        className={
          !toggle ? `${styles.navLinks}` : `${styles.navLinks} ${styles.open}`
        }
      >
        {renderLinks(navConfig)}
      </div>
    </div>
  );
}
