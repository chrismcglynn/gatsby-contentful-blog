import React from "react";
import { graphql } from "gatsby";
import TagCard from "../components/TagCard/TagCard";

export default function Blog({ data }) {
  console.log(data);
  const posts = data.allContentfulBlogPost.edges;
  return (
    <>
      {posts.map(post => (
        <TagCard
          title={post.node.title}
          description={post.node.description.description}
          date={post.node.createdAt}
          slug={post.node.slug}
          image={post.node.heroImage.fluid}
        />
      ))}
    </>
  );
}

export const query = graphql`
  query {
    allContentfulBlogPost(sort: { order: DESC, fields: createdAt }) {
      totalCount
      edges {
        node {
          createdAt(formatString: "DD MMMM, YYYY")
          heroImage {
            fluid(maxWidth: 960) {
              ...GatsbyContentfulFluid_withWebp
              src
              srcSet
            }
          }
          slug
          tags
          title
          description {
            description
          }
        }
      }
    }
  }
`;
