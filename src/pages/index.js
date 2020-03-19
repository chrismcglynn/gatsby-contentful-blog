import React from "react";
import { graphql } from "gatsby";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import SEO from "../components/SEO";
import AffiliateCard from "../components/AffiliateCard/AffiliateCard";

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <LatestPosts header="Latest Posts" />
    <AffiliateCard
      affiliateLink="https://amzn.to/2IXYETo"
      imgSrc="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07X63W2KH&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=cmcglynn-20&language=en_US"
    />
    <img src="" />
  </>
);

export default IndexPage;
