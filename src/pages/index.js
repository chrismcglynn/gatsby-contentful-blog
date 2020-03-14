import React from "react";
import { graphql } from "gatsby";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import SEO from "../components/SEO";
import BlogTags from "./blog-tags"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <LatestPosts header="Latest Posts" postData={data} />
  </>
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
          tags
          createdAt(formatString: "DD MMMM, YYYY")
          description {
            description
          }
        }
      }
    }
  }
`;
