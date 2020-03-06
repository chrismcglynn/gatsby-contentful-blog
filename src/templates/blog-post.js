import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Pill from "../components/Pill/Pill"
import styles from "./blog-post.module.css"

export default ({ data }) => {
  const post = data.contentfulBlogPost

  return (
    <>
      <Layout>
        {/* <SEO title={post.frontmatter.title} description={post.excerpt} /> */}
        <h1 className={styles.postTitle}>{post.title}</h1>
        <span className={styles.date}>{post.createdAt}</span>
        <span className={styles.postAuthor}>{post.author.name}</span>
        <Pill tags={post.tags} />
        <div className={styles.imageContainer}>
          <img
            className={styles.heroImage}
            src={post.heroImage.file.url}
            alt={post.heroImage.description}
          />
        </div>
        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
        />
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
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
        file {
          url
        }
        description
      }
    }
  }
`
