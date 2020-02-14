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
    height: 350px;
    line-height: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed
    backgroundImage: url(${image})
  `;
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
        <Heading as="h2" mb="4" size="lg" bg="rgb(254, 240, 1)" p={2} w="fit-content">
          {title}
        </Heading>
        <Heading as="h3" size="md" bg="rgb(254, 240, 1)" p={2} w="fit-content">
          {subheading}
        </Heading>
      </Hero>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link to="/products">
                        <Button variantColor="wiha" variant="outline">
                          See all products
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link to="/blog">
                        <Button variantColor="wiha" variant="outline">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
