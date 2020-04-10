import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout/Layout";

export default function CategoriesPage({ data }) {
  return (
    <Layout>
      <Helmet title={data.site.siteMetadata.title} />
      <div>
        <h1>Categories</h1>
        <ul>
          {data.allContentfulBlogPost.group.map(category => (
            <li key={category.fieldValue}>
              <Link to={`/categories/${category.fieldValue}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(limit: 2000) {
      group(field: category) {
        fieldValue
        totalCount
      }
    }
  }
`;
