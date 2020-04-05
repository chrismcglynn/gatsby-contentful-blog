import React from "react";
import PropTypes from "prop-types";
import styles from "./BlogLayout.module.css";
import "../../../global.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.blogLayout}>
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
