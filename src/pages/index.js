import React from "react";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <LatestPosts header="Latest Posts" />
  </Layout>
);

export default IndexPage;
