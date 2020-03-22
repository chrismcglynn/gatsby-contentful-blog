const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve("src/templates/blog-post.js");
  const recipeTemplate = path.resolve("src/templates/recipe.js");
  const tagTemplate = path.resolve("src/templates/blog-tag.js");

  const result = await graphql(`
    query {
      postsRemark: allContentfulBlogPost(
        sort: { order: DESC, fields: [createdAt] }
        limit: 2000
      ) {
        edges {
          node {
            slug
            tags
          }
        }
      }
      recipeRemark: allContentfulRecipe(
        sort: { order: DESC, fields: [createdAt] }
        limit: 2000
      ) {
        edges {
          node {
            slug
          }
        }
      }
      tagsGroup: allContentfulBlogPost(limit: 2000) {
        group(field: tags) {
          fieldValue
        }
      }
    }
  `);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.postsRemark.edges;
  const recipes = result.data.recipeRemark.edges;

  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: blogPostTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug
      }
    });
  });

  // Create recipe detail pages
  recipes.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: recipeTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug
      }
    });
  });

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue
      }
    });
  });
};
