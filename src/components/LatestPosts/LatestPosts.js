import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import styles from './LatestPosts.module.css';

export default function ({ header, postData }) {
  const posts = postData.allContentfulBlogPost.edges

  return (
    <section className={styles.latestPosts}>
      <h1 className={styles.header}>{header}</h1>
      <div className={styles.postsContainer}>
        {posts.map(post => (
          <BlogCard
            key={`post-${post.node.slug}`}
            slug={post.node.slug}
            title={post.node.title}
            date={post.node.createdAt}
            description={post.node.description.description}
          />
        ))}
      </div>
    </section>
  );
}
