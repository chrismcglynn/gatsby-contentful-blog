import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Pill from "../components/Pill/Pill";
import styles from "./templateStyles.module.css";

export default ({ data }) => {
  const post = data.contentfulBlogPost;

  return (
    <>
      {/* <SEO title={post.frontmatter.title} description={post.excerpt} /> */}
      <h1 className={styles.postTitle}>{post.title}</h1>
      <span className={styles.postDate}>{post.createdAt}</span>
      <span className={styles.postAuthor}>{post.author.name}</span>
      <Pill tags={post.tags} />
      <div className={styles.imageContainer}>
        <Img
          fluid={post.heroImage.fluid}
        />
      </div>
      <div
        className={styles.postContent}
        dangerouslySetInnerHTML={{
          __html: post.body.childMarkdownRemark.html
        }}
      />
    </>
  );
};

export const query = graphql`
query($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    body {
      childMarkdownRemark {
        html
      }
    }
    createdAt(formatString: "DD MMMM, YYYY")
    title
    tags
    author {
      name
    }
    heroImage {
      description
      fluid(maxWidth: 960) {
        ...GatsbyContentfulFluid_withWebp
        src
        srcSet
      }
    }
  }
}
`
