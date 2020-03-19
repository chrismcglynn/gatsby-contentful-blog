import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styles from "./AffiliateCard.module.css";

export default function({ affiliateLink, imgSrc }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          contentfulSonyCamera {
            id
            affiliateLink
            cameraName
            image {
              fluid(maxWidth: 960) {
                ...GatsbyContentfulFluid_withWebp
                src
                srcSet
              }
              description
            }
          }
        }
      `}
      render={function(data) {
        return (
          <a
            href={data.contentfulSonyCamera.affiliateLink}
            target="_blank"
            className={styles.cardWrapper}
          >
            <Img fluid={data.contentfulSonyCamera.image.fluid} />
          </a>
        );
      }}
    />
  );
}
