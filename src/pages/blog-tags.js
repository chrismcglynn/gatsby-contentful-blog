import React from "react";
import { graphql } from "gatsby";
import PostLink from "../components/PostLink/PostLink"
const IndexPage = ({
  data: {
    allContentfulBlogPost: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.title) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node.tags} />)
  return <div>{Posts}</div>
}
export default IndexPage

export const query = graphql`
  query {
      allContentfulBlogPost {
        edges {
          node {
            title
          }
        }
      }
    }
`;