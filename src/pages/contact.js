import React from "react"
import Layout from "../components/Layout/Layout"
import styles from "./pages.module.css"

export default function Contact() {
  return (
    <>
      <Layout>
        <h1 className={styles.headerText}>Contact Page</h1>
        <p>Send us a message!</p>
      </Layout>
    </>
  )
}
