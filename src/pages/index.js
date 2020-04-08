import React from "react";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import HeroNav from "../components/HomePageSections/HeroNav/HeroNav";
import styles from "./pages.module.css";

const IndexPage = ({ data }) => (
  <>
    <Layout>
      <SEO title="Home" />
      <HeroNav header="Header Text" />
      <LatestPosts header="Latest Posts" />
    </Layout>
  </>
);

export default IndexPage;
