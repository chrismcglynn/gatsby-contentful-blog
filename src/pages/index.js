import React from "react";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import styles from "./pages.module.css";

const IndexPage = ({ data }) => (
  <>
    <Layout>
      <SEO title="Home" />
      <section className={styles.heroNav}>
        <div className={styles.heroNavContent}>
          <h1 className={styles.heroNavHeader}>Make all the right choices</h1>
          <p className={styles.heroNavSubtitle}>
            Need expert money advice, helpful tools and tailored insights to
            answer your money questions? Turn to the Nerds.
          </p>
        </div>
        <div className={styles.tileWrapper}>
          <p className={styles.heroNavTileSubtitle}>Easily compare tons of options to find your best</p>
          <div className={styles.heroNavTiles}>
            <div className={styles.heroNavTile}></div>
            <div className={styles.heroNavTile}></div>
            <div className={styles.heroNavTile}></div>
            <div className={styles.heroNavTile}></div>
            <div className={styles.heroNavTile}></div>
          </div>
        </div>
      </section>
      <LatestPosts header="Latest Posts" />
    </Layout>
  </>
);

export default IndexPage;
