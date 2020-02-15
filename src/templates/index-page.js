import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/core";
import { Heading } from "@chakra-ui/core";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

const IntroStyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50em;
  align-items: left;
  margin: auto;
`;
const IntroBlurb = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2em;
`;

const MarkdownImageStyle = styled.img`
  height: 25em;
  margin: 1em auto;
`;

const MarkdownLinkStyle = styled.a`
  text-decoration: underline;
`;

function LinkRenderer(props) {
  return <MarkdownLinkStyle>{props.children}</MarkdownLinkStyle>;
}

function ImageRenderer(props) {
  return <MarkdownImageStyle src={props.src} />;
}

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description
}) => {
  const Hero = styled.div`
  display: flex;
  height: 18em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed
  backgroundImage: url(${image})
  `;

  return (
    <>
      <Hero
        style={{
          backgroundImage: `url(${
            image
            // !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`
        }}
      >
        <Heading
          as="h2"
          mb="4"
          size="lg"
          bg="blackAlpha.800"
          color="brightYellow"
          p={2}
          w="fit-content"
        >
          {title}
        </Heading>
        <Heading
          as="h3"
          size="md"
          color="brightYellow"
          bg="blackAlpha.800"
          p={2}
          w="fit-content"
        >
          {subheading}
        </Heading>
      </Hero>
      <IntroStyleWrapper>
        <IntroBlurb>
          <Heading as="h4" size="md" textAlign={'center'} my={2}>
            {mainpitch.title}
          </Heading>
          <ReactMarkdown
            renderers={{ link: LinkRenderer, image: ImageRenderer }}
            source={mainpitch.description}
          />
          <Heading as="h4" size="md" textAlign={'center'} my={2}>
            {heading}
          </Heading>
          <p>{description}</p>
          <Heading as="h4" size="md" textAlign={'center'} my={2}>
            Latest updates
          </Heading>
          <BlogRoll />
          <Link to="/blog">
            <Button variant="outline">Read More</Button>
          </Link>
        </IntroBlurb>
      </IntroStyleWrapper>
    </>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
      }
    }
  }
`;
