import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import { Heading } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";
import ReactMarkdown from "react-markdown";

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50em;
  align-items: left;
  max-width: 100%;
  margin: 2em auto;

  p {
    padding: 0.75em 0;
  }
`;

export const PlayPageTemplate = ({ title, details }) => {
  const { heading, description } = details;

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

      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        {heading}
      </h2>
      <Text mb="5" fontSize="lg"><ReactMarkdown source={description} /></Text>
    </ContentWrapper>
  );
};

PlayPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.object
};

const PlayPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PlayPageTemplate
        title={post.frontmatter.title}
        details={post.frontmatter.details}
      />
    </Layout>
  );
};

PlayPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default PlayPage;

export const PlayPageQuery = graphql`
  query PlayPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        details {
          heading
          description
        }
      }
    }
  }
`;
