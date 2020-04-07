import React from "react";
import { graphql } from "gatsby";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disqus, CommentCount } from "gatsby-plugin-disqus";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import BlogLayout from "../components/Layout/BlogLayout/BlogLayout";
import Img from "gatsby-image";
import Pill from "../components/Pill/Pill";
import styles from "./templateStyles.module.css";

export default ({ data, location }) => {
  const post = data.contentfulBlogPost;
  let disqusConfig = {
    url: `${location.origin+location.pathname}`,
    identifier: post.id,
    title: post.title,
  }
  return (
    <Layout>
      <BlogLayout>
        <SEO title={post.title} description={post.excerpt} />
        <aside>
          <div className={styles.iconWrapper}>
            <div>
              <FontAwesomeIcon
                icon={faFacebookF}
                className={styles.facebookIcon}
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faTwitter}
                className={styles.twitterIcon}
              />
            </div>
          </div>
        </aside>
        <article>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <span className={styles.postDate}>{post.createdAt}</span>
          <div className={styles.pillContainer}>
            {post.tags.map((tag, idx) => (
              <Pill key={`${tag}-${idx}`} className={styles.postPill} tag={tag} />
            ))}
          </div>
          <div className={styles.imageContainer}>
            <Img fluid={post.heroImage.fluid} />
          </div>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html
            }}
          />
          <CommentCount config={disqusConfig} placeholder={"..."} />
          <Disqus config={disqusConfig} />
        </article>
        <nav>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
          urna duis convallis convallis. Fringilla urna porttitor rhoncus dolor
          purus non enim praesent elementum. Ultricies mi quis hendrerit dolor
          magna eget est lorem ipsum. Mauris cursus mattis molestie a iaculis at
          erat pellentesque. Aliquam id diam maecenas ultricies mi. At imperdiet
          dui accumsan sit amet nulla. Turpis tincidunt id aliquet risus feugiat
          in ante metus. Nisl condimentum id venenatis a condimentum vitae. Sit
          amet volutpat consequat mauris nunc congue nisi vitae. A diam maecenas
          sed enim ut sem. Sed cras ornare arcu dui vivamus arcu felis bibendum.
          Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Arcu
          cursus euismod quis viverra nibh cras pulvinar mattis nunc. Praesent
          semper feugiat nibh sed. Quis risus sed vulputate odio ut enim blandit
          volutpat maecenas. Pellentesque elit eget gravida cum. Odio
          pellentesque diam volutpat commodo. Nisi porta lorem mollis aliquam ut
          porttitor leo.
        </nav>
      </BlogLayout>
    </Layout>
  );
};

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
        description
        fluid(maxWidth: 960) {
          ...GatsbyContentfulFluid_withWebp
          src
          srcSet
        }
      }
    }
  }
`;
