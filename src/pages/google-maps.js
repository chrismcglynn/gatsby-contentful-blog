import React from "react";
import { WrappedMap } from "../components/GoogleMap/GoogleMap";
import styles from "./pages.module.css";

export default function GoogleMaps() {
  return (
    <>
      <h1 className={styles.headerText}>Google Maps Example</h1>
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
    </>
  );
}
