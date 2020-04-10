/*******************************************************
Page that displays all posts that have the selected Category
*******************************************************/
import React from "react";
import { Link, graphql } from "gatsby";
import { capitalizeFirstLetter } from "../utils/uppercaseFirstLetter";
import Layout from "../components/Layout/Layout";
import TagCard from "../components/TagCard/TagCard";
import Button from "../components/Button/Button";

export default function Category ({ pageContext, data }) {
  const categoryHeader = `${data.allContentfulBlogPost.totalCount} post${
    data.allContentfulBlogPost.totalCount === 1 ? "" : "s"
  } in the "${capitalizeFirstLetter(pageContext.category)}" category`;

  return (
    <Layout>
      <h1>{categoryHeader}</h1>
      {data.allContentfulBlogPost.edges.map(({ node }) => {
        return (
          <TagCard title={node.title} description={node.description.description} date={node.createdAt} image={node.heroImage.fluid} slug={node.slug} />
        );
      })}
      <Link to="/categories">
        <Button label="All Categories" />
      </Link>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($category: String) {
    allContentfulBlogPost (
      sort: { order: DESC }
      filter: { category: { in: [$category] } }
    ) {
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
          category
        }
      }
    }
  }
`;
