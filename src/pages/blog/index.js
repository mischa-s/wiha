import React from "react";
import { Heading } from "@chakra-ui/core";
import styled from "@emotion/styled";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";


const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50em;
  align-items: left;
  max-width: 100%;
  margin: 2em auto;
`;
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <ContentWrapper>
          <div
            className="full-width-image-container margin-top-0"
            style={{
              backgroundImage: `url('/img/blog-index.jpg')`
            }}
          >
            <Heading
              as="h2"
              mb="5"
              size="xl"
              bg="blackAlpha.800"
              color="brightYellow"
              p={2}
            >Latest news </Heading>
          </div>
          <section className="section">
            <div className="container">
              <div className="content">
                <BlogRoll />
              </div>
            </div>
          </section>
        </ContentWrapper>
      </Layout>
    );
  }
}
