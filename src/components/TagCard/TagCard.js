import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Button from "../Button/Button";
import styles from "./TagCard.module.css";

export default function TagCard({ title, description, date, slug, image }) {
  return (
    <div className={styles.tagCard}>
      <Img className={styles.image} fluid={image} />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.postTitle}>{title}</div>
          <div className={styles.postDate}>{date}</div>
          <div className={styles.postDescription}>{description}</div>
        </div>
        <div className={styles.buttonContainer}>
        <Link className={styles.button} to={`/${slug}`}>
          <Button label="Read More" />
          </Link>
          </div>
      </div>
    </div>
  );
}
