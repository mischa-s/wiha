import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/core";
import { Heading } from "@chakra-ui/core";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

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

  const IntroBlurb = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2em;
  `
  return (
    <div>
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
          bg="brightYellow"
          p={2}
          w="fit-content"
        >
          {title}
        </Heading>
        <Heading as="h3" size="md" bg="brightYellow" p={2} w="fit-content">
          {subheading}
        </Heading>
      </Hero>
      <IntroBlurb>
        <Heading as="h4" size="md" p={2} w="fit-content">
          {mainpitch.title}        
        </Heading>
        <Heading as="h5" size="sm" p={2} w="fit-content">
          {mainpitch.description}
        </Heading>
        <Heading as="h4" size="md" p={2} w="fit-content">
          {heading}
        </Heading>
        <p>{description}</p>
        <h3>Latest stories</h3>
        <BlogRoll />
        <Link to="/blog">
          <Button variant="outline">
            Read More
          </Button>
        </Link>
      </IntroBlurb>
    </div>
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
