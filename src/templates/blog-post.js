import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/core";
import { Divider } from "@chakra-ui/core";
import { List, ListItem } from "@chakra-ui/core";
import { Flex } from "@chakra-ui/core";
import { Heading } from "@chakra-ui/core";

import Content, { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";

import ContentWrapper from "../lib/content-wrapper";

const TagWrapper = styled.div`
  margin: 2em auto;
`;

export function BlogPostTemplate({
  content,
  contentComponent,
  description,
  date,
  tags,
  title,
  helmet
}) {
  const PostContent = contentComponent || Content;

  return (
    <ContentWrapper>
      {helmet || ""}
      <div>
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
        <Heading as="h2" mb="5" size="md">
          {description}
        </Heading>
        <Heading as="h5" mb="5" size="sm">
          {date}
        </Heading>
        <PostContent content={content} />

        {tags && tags.length ? (
          <TagWrapper>
            <h4>Tags</h4>
            <List styleType="disc">
              {tags.map(tag => (
                <ListItem key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </ListItem>
              ))}
            </List>
          </TagWrapper>
        ) : null}
      </div>
      <Divider my={6} />
      <Flex justify={"space-between"}>
        <Link to="/">
          <Button variant="link">Back to blog</Button>
        </Link>
        <Link to="/blog">
          <Button variant="link">Back to home</Button>
        </Link>
      </Flex>
    </ContentWrapper>
  );
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
