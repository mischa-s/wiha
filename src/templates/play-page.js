import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import styled from "@emotion/styled";
import { Flex } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import { Heading } from "@chakra-ui/core";

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

export const PlayPageTemplate = ({ title, intro }) => {
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
        Play
      </Heading>

      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        {title}
      </h2>
      {intro && <Features gridItems={intro.blurbs} />}
    </ContentWrapper>
  );
};

PlayPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const PlayPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PlayPageTemplate
        title={post.frontmatter.title}
        intro={post.frontmatter.intro}
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
      html
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
