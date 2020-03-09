import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import { Heading } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";
import ReactMarkdown from "react-markdown";
import useGoogleSpreadsheet from "../lib/use-google-spreadsheet";

const Stats = ({}) => {
  const API_KEY = "AIzaSyDWtp4gWd-POH7YFbZIt5YiO4myypwc-vg";
  const shareUrl =
    "https://sheets.googleapis.com/v4/spreadsheets/1F5Dr7jXlgCGaa9Ei5SSMP_calnmB4j-EK8k4QrLIjaQ?key=AIzaSyDWtp4gWd-POH7YFbZIt5YiO4myypwc-vg";
  const { rows, isFetching } = useGoogleSpreadsheet(shareUrl, API_KEY);
  return isFetching ? (
    <div>Loading...</div>
  ) : rows ? (
    <table>
      <thead>
        <tr>
          {rows[0].map((header, i) => {
            return (
              <th key={i}>
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => {
          return i > 0 &&  (
            <tr>
              {row.map((column, key) => {
                return (
                  <td key={key}>
                    {column}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <span>No Data</span>
  );
};

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50em;
  align-items: left;
  max-width: 100%;
  margin: 2em auto;

  p {
    padding: 0.75em 0;
    ul {
      list-style-position: inside;
    }
  }
`;

export const PlayPageTemplate = ({ title, details }) => {
  const { heading, description } = details;

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
      <Stats />

      {/* <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        {heading}
      </h2>
      <Text mb="5" fontSize="lg">
        <ReactMarkdown source={description} />
      </Text> */}
    </ContentWrapper>
  );
};

PlayPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.object
};

const PlayPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PlayPageTemplate
        title={post.frontmatter.title}
        details={post.frontmatter.details}
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
      frontmatter {
        title
        details {
          heading
          description
        }
      }
    }
  }
`;
