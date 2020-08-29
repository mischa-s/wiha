import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Heading } from "@chakra-ui/core";

import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import Features from "../components/Features";
import ContentWrapper from "../styles/content-wrapper";

export function AboutPageTemplate({ title, intro }) {
  return (
    <ContentWrapper>
      <Heading
        as="h1"
        mb="5"
        size="xl"
        bg="blackAlpha.800"
        color="brightYellow"
        p={2}
      >
        {title}
      </Heading>
      <Heading as="h2" my="3" size="lg">
        {intro.heading}
      </Heading>
      <div>
        <ReactMarkdown source={intro.description} className=""/>
      </div>
      {intro && <Features gridItems={intro.blurbs} />}
    </ContentWrapper>
  );
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        intro={post.frontmatter.intro}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
      }
    }
  }
`;
