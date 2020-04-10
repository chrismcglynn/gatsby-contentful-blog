import React from "react";
import Layout from "../components/Layout/Layout";
import ContactForm from "../components/ContactForm/ContactForm";
import { WrappedMap } from "../components/GoogleMap/GoogleMap";
import styles from "./pages.module.css";

export default function Contact() {
  return (
    <Layout>
      <h1 className={styles.headerText}>Contact Page</h1>
      <div className={styles.contactContainer}>
        <ContactForm heading="Send Us A Message!" />
      </div>
      <div className={styles.googleMap}>
          <WrappedMap
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
            ${process.env.GATSBY_GOOGLE_API_KEY}
            `}
        />
      </div>
    </Layout>
  );
}
