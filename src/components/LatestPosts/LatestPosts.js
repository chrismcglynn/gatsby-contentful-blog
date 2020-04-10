import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import BlogCard from "../BlogCard/BlogCard";
import styles from "./LatestPosts.module.css";

export default function({ header }) {
  return (
    <section className={styles.latestPosts}>
      <h1 className={styles.headerText}>{header}</h1>
      <div className={styles.postsContainer}>
        <StaticQuery
          query={graphql`
            query {
              allContentfulBlogPost {
                edges {
                  node {
                    title
                    slug
                    tags
                    heroImage {
                      description
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
              }
            }
          `}
          render={function(data) {
            const posts = data.allContentfulBlogPost.edges;
            return posts.map(function(post) {
              return (
                <BlogCard
                  image={<Img fluid={post.node.heroImage.fluid} />}
                  key={`post-${post.node.slug}`}
                  slug={post.node.slug}
                  title={post.node.title}
                  date={post.node.createdAt}
                  description={post.node.description.description}
                />
              );
            });
          }}
        />
      </div>
    </section>
  );
}
