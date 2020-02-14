import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import styled from "@emotion/styled";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WrapRootElement from "../components/WrapWithTheme";

const MinHeightForTemplate = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <WrapRootElement
      element={
        <>
          <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href={`${withPrefix("/")}img/apple-touch-icon.png`}
            />
            <link
              rel="icon"
              type="image/png"
              href={`${withPrefix("/")}img/favicon-32x32.png`}
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href={`${withPrefix("/")}img/favicon-192x192.png`}
              sizes="152x152"
            />
            <link
              rel="icon"
              type="image/png"
              href={`${withPrefix("/")}img/favicon-192x192.png`}
              sizes="182x182"
            />
            <link
              rel="icon"
              type="image/png"
              href={`${withPrefix("/")}img/favicon-192x192.png`}
              sizes="192x192"
            />

            <link
              rel="mask-icon"
              href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
              color="#746F27"
            />
            <meta name="theme-color" content="#fff" />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content="/" />
            <meta
              property="og:image"
              content={`${withPrefix("/")}img/og-image.jpg`}
            />
          </Helmet>
          <MinHeightForTemplate>
            <Navbar />
            <div>{children}</div>
            <Footer />
          </MinHeightForTemplate>
        </>
      }
    />
  );
};

export default TemplateWrapper;
