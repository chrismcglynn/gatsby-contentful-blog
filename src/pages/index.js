import React from "react";
import { graphql } from "gatsby";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import Layout from "../components/Layout";
import Image from "../components/Image";
import SEO from "../components/SEO";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <LatestPosts
      header="Latest Posts"
      postData={data}
    />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          id
          author {
            name
          }
          slug
          createdAt(formatString: "DD MMMM, YYYY")
          description {
            description
          }
        }
      }
    }
  }
`;
