import React from "react";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import SEO from "../components/SEO";

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <LatestPosts header="Latest Posts" />
  </>
);

export default IndexPage;
