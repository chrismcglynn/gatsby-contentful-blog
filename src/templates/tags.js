import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  console.log('pageContext: ', pageContext)
  console.log('data: ', data)
  
  // const { tag } = pageContext
  // const { edges, totalCount } = data.allContentfulBlogPost
  const tagHeader = `${data.allContentfulBlogPost.totalCount} post${data.allContentfulBlogPost.totalCount === 1 ? "" : "s"} tagged with "${pageContext.tag}"`

  return (
    <div>
      <h1>{tagHeader}</h1>
      <ul>
        {data.allContentfulBlogPost.edges.map(({ node }) => {
          const { slug, title } = node
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>

      <Link to="/tags">All tags</Link>
    </div>
  )
}

// Tags.propTypes = {
//   pageContext: PropTypes.shape({
//     tag: PropTypes.string.isRequired,
//   }),
//   data: PropTypes.shape({
//     allContentfulBlogPost: PropTypes.shape({
//       totalCount: PropTypes.number.isRequired,
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//               title: PropTypes.string.isRequired,
//             }),
//             fields: PropTypes.shape({
//               slug: PropTypes.string.isRequired,
//             }),
//           }),
//         }).isRequired
//       ),
//     }),
//   }),
// }

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    allContentfulBlogPost(
      sort: {order: DESC},
      filter: {tags: {in: [$tag] }}
    ) {
      edges {
        node {
          id
          slug,
          title
        }
      }
      totalCount
    }
  }
`