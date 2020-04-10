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
          <h1 className={styles.postTitle}>{title}</h1>
          <span className={styles.postDate}>{date}</span>
          <p className={styles.postDescription}>{description}</p>
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
