/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react";
import { Helmet } from "react-helmet";
import Layout from "./src/components/Layout/Layout";
import "./src/global.css";

// Wraps every page in a component
export function wrapPageElement({ element, props }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chris McGlynn</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Layout {...props}>{element}</Layout>
    </>
  );
}
