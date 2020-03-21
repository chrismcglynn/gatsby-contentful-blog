// import React from "react";
// import { StaticQuery, graphql, Link } from "gatsby";
// import Img from "gatsby-image";
// import styles from "./AffiliateCard.module.css";

// export default function({ itemName }) {
//   return (
//     <StaticQuery
//       query={graphql`
//         {
//           contentfulAmazonAffiliateItem(item: { eq: ${itemName} }) {
//             affiliateLink
//             item
//             image {
//               fluid(maxWidth: 960) {
//                 srcWebp
//                 srcSet
//                 src
//               }
//               description
//             }
//           }
//         }
//       `}
//       render={function(data) {
//         return (
//           <a
//             href={data.contentfulAmazonAffiliateItem.affiliateLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.cardWrapper}
//           >
//             <Img fluid={data.contentfulAmazonAffiliateItem.image.fluid} />
//           </a>
//         );
//       }}
//     />
//   );
// }
