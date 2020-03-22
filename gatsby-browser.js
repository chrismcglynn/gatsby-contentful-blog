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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0"/>
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css" />
      </Helmet>
      <Layout {...props}>{element}</Layout>
    </>
  );
}
