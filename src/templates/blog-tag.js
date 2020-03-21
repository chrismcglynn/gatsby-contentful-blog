import React from "react";
import { Link, graphql } from "gatsby";
import TagCard from "../components/TagCard/TagCard";
import Button from "../components/Button/Button";

export default function Tags ({ pageContext, data }) {
  const tagHeader = `${data.allContentfulBlogPost.totalCount} post${
    data.allContentfulBlogPost.totalCount === 1 ? "" : "s"
  } tagged with "${pageContext.tag}"`;

  return (
    <div>
      <h1>{tagHeader}</h1>
      {data.allContentfulBlogPost.edges.map(({ node }) => {
        return (
          <TagCard title={node.title} description={node.description.description} date={node.createdAt} image={node.heroImage.fluid} slug={node.slug} />
        );
      })}
      <Link to="/tags">
        <Button label="All Tags" />
      </Link>
    </div>
  );
};

export const pageQuery = graphql`
  query($tag: String) {
    allContentfulBlogPost(
      sort: { order: DESC }
      filter: { tags: { in: [$tag] } }
    ) {
      edges {
        node {
          title
          slug
          tags
          heroImage {
            fluid(maxWidth: 960) {
              ...GatsbyContentfulFluid_withWebp
              src
              srcSet
            }
          }
          createdAt(formatString: "DD MMMM, YYYY")
          description {
            description
          }
        }
      }
      totalCount
    }
  }
`;
