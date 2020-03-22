import React from "react";
import { graphql } from "gatsby";
import RecipeCard from "../components/RecipeCard/RecipeCard";

export default function Blog({ data }) {
  console.log('recipe data: ', data);
  const recipes = data.allContentfulRecipe.edges;
  return (
    <>
      {recipes.map(recipe => (
        <RecipeCard
          title={recipe.node.title}
          // description={recipe.node.description.description}
          date={recipe.node.createdAt}
          slug={recipe.node.slug}
          // image={recipe.node.heroImage.fluid}
        />
      ))}
    </>
  );
}

export const query = graphql`
  {
    allContentfulRecipe(sort: { order: DESC, fields: createdAt }) {
      totalCount
      edges {
        node {
          title
          slug
          description {
            description
          }
          heroImage {
            fluid {
              src
              srcSet
              srcSetWebp
            }
          }
          createdAt(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
`