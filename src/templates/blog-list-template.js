import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/Layout/Layout";
import TagCard from "../components/TagCard/TagCard";

export default function Blog({ data, pageContext }) {
  const posts = data.allContentfulBlogPost.edges;
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <Layout>
      {posts.map(post => (
        <TagCard
          title={post.node.title}
          description={post.node.description.description}
          date={post.node.createdAt}
          slug={post.node.slug}
          image={post.node.heroImage.fluid}
        />
      ))}
      {!isFirst && (
        <Link to={`/blog/${prevPage}`} rel="prev">
          ← Previous Page
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <Link key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? "" : i + 1}`}>
          {i + 1}
        </Link>
      ))}
      {!isLast && (
        <Link to={`/blog/${nextPage}`} rel="next">
          Next Page →
        </Link>
      )}
    </Layout>
  );
}

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { order: DESC, fields: createdAt }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          createdAt(formatString: "DD MMMM, YYYY")
          heroImage {
            fluid(maxWidth: 960) {
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
