import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => {
  console.log(post)
  return (
    <div>
      <Link to={post}>
        {post}
      </Link>
    </div>
  )
}

export default PostLink