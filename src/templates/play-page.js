import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { Heading } from "@chakra-ui/core";

import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";

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

export function PlayPageTemplate({ title, description }) {
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
      <div>
        <ReactMarkdown source={description} className="" />
      </div>
    </ContentWrapper>
  );
}

PlayPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const PlayPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PlayPageTemplate
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
    </Layout>
  );
};

PlayPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PlayPage;

export const playPageQuery = graphql`
  query PlayPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
