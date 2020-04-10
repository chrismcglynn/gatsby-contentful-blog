import React from "react";
import { Link } from "gatsby";
import styles from "./BlogCard.module.css";

export default function BlogCard({ title, description, date, slug, image }) {
  return (
    <Link to={`/${slug}`} className={styles.cardWrapper}>
      <div className={styles.image}>{image}</div>
      <div className={styles.content}>
        <div className={styles.postTitle}>{title}</div>
        <div className={styles.postDate}>{date}</div>
        <div className={styles.postDescription}>{description}</div>
      </div>
    </Link>
  );
}
