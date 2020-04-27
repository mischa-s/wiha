import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { Heading } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";

import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import Features from "../components/Features";

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 70em;
  align-items: left;
  max-width: 100%;
  margin: 2em auto;

  p {
    padding: 0.75em 0;
  }
`;

export function BearLeaguePageTemplate({ title, intro }) {
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
      <Text mb="5" fontSize="lg">
        <ReactMarkdown source={intro.description} />
      </Text>
    </ContentWrapper>
  );
}

BearLeaguePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.object,
};

const BearLeaguePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BearLeaguePageTemplate
        title={post.frontmatter.title}
        intro={post.frontmatter.intro}
      />
    </Layout>
  );
};

BearLeaguePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BearLeaguePage;

export const bearLeaguePageQuery = graphql`
  query BearLeaguePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        intro {
          heading
          description
        }
      }
    }
  }
`;