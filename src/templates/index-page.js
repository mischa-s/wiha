import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/core";
import { Heading } from "@chakra-ui/core";
import { Flex } from "@chakra-ui/core";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

const Hero = styled.div`
  display: flex;
  height: 18em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.image});
`;

const IntroBlurb = styled.section`
  display: flex;
  flex-direction: column;
  width: 50em;
  align-items: left;
  max-width: 100%;
  margin: 2em auto 3em auto;
`;

const SecondaryHeroInner = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 50em;
  min-width: 10em;
  align-items: left;
  margin: 2em auto;
  color: white;
  padding: 5em;
  border: 2px solid yellow;
`;

const FlexedMarkdown = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1em auto;
`;

const MarkdownImageStyle = styled.img`
  width: 80%;
  margin: .5em auto;
  flex-grow: 1
`;

const MarkdownParagraphStyle = styled.p`
  width: 50%;
  padding: .5em 0;
  margin: auto 0;
  flex-grow: 1
`;

const SecondaryHero = styled.div`
  padding: 2em;
  background: rgba(0, 0, 0, 0.85);
`;

const MarkdownLinkStyle = styled.a`
  text-decoration: underline;
`;

function LinkRenderer(props) {
  return <MarkdownLinkStyle href={props.href}>{props.children}</MarkdownLinkStyle>;
}

function ParagraphRenderer(props) {
  return <MarkdownParagraphStyle>{props.children}</MarkdownParagraphStyle>;
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
  return (
    <>
      <Hero
        image={image}
        // style={{
        //   backgroundImage: `url(${
        //     image
        //     // !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        //   })`
        // }}
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
      <IntroBlurb>
        <Heading
          as="h4"
          size="lg"
          fontWeight={500}
          textAlign={"center"}
          my={5}
        >
          {mainpitch.title}
        </Heading>
        <FlexedMarkdown>
          <ReactMarkdown
            renderers={{
              link: LinkRenderer,
              image: ImageRenderer,
              paragraph: ParagraphRenderer
            }}
            source={mainpitch.description}
          />
        </FlexedMarkdown>
      </IntroBlurb>
      {(heading || description) && (
        <SecondaryHero>
          <SecondaryHeroInner>
            <Heading
              as="h4"
              size="lg"
              fontWeight={500}
              textAlign={"center"}
              my={5}
            >
              {heading}
            </Heading>
              <ReactMarkdown
              renderers={{
                link: LinkRenderer,
                image: ImageRenderer,
                paragraph: ParagraphRenderer
              }}
              source={description}
            />
          </SecondaryHeroInner>
        </SecondaryHero>
      )}
      <IntroBlurb>
        <Heading as="h4" size="lg" fontWeight={500} textAlign={"center"} my={5}>
          Latest updates
        </Heading>
        <BlogRoll />
        <Flex justify={"center"}>
          <Link to="/blog">
            <Button size="lg" variant="outline">Read More</Button>
          </Link>
        </Flex>
      </IntroBlurb>
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
