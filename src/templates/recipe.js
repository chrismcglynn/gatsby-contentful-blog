import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Pill from "../components/Pill/Pill";
import styles from "./templateStyles.module.css";

export default ({ data }) => {
  const recipe = data.contentfulRecipe;

  return (
    <>
      {/* <SEO title={post.frontmatter.title} description={post.excerpt} /> */}
      <h1 className={styles.postTitle}>{recipe.title}</h1>
      <span className={styles.postDate}>{recipe.createdAt}</span>
      <div className={styles.imageContainer}>
        <Img fluid={recipe.heroImage.fluid} />
      </div>
      <p className={styles.recipeDescription}>
        {recipe.description.description}
      </p>
      <ul>
        {recipe.ingredients.map(ingredient => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <p className={styles.recipeInstructions}>
        {recipe.instructions.instructions}
      </p>
      {/* <Pill tags={recipe.tags} /> */}
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulRecipe(slug: { eq: $slug }) {
      title
      createdAt(formatString: "DD MMMM, YYYY")
      ingredients
      description {
        id
      }
      heroImage {
        fluid(maxWidth: 960) {
          ...GatsbyContentfulFluid_withWebp
          src
          srcSet
        }
      }
      instructions {
        instructions
      }
    }
  }
`;
