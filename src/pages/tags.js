import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout/Layout";

export default function TagsPage({ data }) {
  return (
    <Layout>
      <Helmet title={data.site.siteMetadata.title} />
      <div>
        <h1>Tags</h1>
        <ul>
          {data.allContentfulBlogPost.group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${tag.fieldValue}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(limit: 2000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`