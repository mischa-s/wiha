import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Heading } from "@chakra-ui/core";

import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";

import ContentWrapper from "../lib/content-wrapper";

export function SealsPageTemplate({ title, description }) {
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

SealsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
};

const SealsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SealsPageTemplate
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
    </Layout>
  );
};

SealsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SealsPage;

export const sealsPageQuery = graphql`
  query SealsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
