import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Heading } from "@chakra-ui/core";

import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import markdownRenderers from "../lib/markdown-renderers"

import ContentWrapper from "../lib/content-wrapper";


export function YouthPageTemplate({ title, description }) {
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
        {description.heading}
      </Heading>
      <div>
        <ReactMarkdown source={description} className="" renderers={markdownRenderers}/>
      </div>
    </ContentWrapper>
  );
}

YouthPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.object,
};

const YouthPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <YouthPageTemplate
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
    </Layout>
  );
};

YouthPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default YouthPage;

export const youthPageQuery = graphql`
  query YouthPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
