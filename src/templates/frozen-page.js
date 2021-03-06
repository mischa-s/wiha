import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { Heading } from "@chakra-ui/core";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import useGoogleSpreadsheet from "../lib/use-google-spreadsheet";
import markdownRenderers from "../lib/markdown-renderers";
import ContentWrapper from "../styles/content-wrapper";

const Table = styled.table`
  width: 50em;
  max-width: 100%;
  overflow-x: scroll;

  th {
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: #fef001;
    text-align: center;
    text-transform: uppercase;
  }

  th,
  td {
    border: 1px solid rgba(0, 0, 0, 0.2);
    font-size: 12px;
  }
`;

const Stats = () => {
  const { valueRanges, isFetching } = useGoogleSpreadsheet();
  return isFetching ? (
    <div>Loading...</div>
  ) : valueRanges ? (
    <>
      {valueRanges.map((range, rangeIndex) => {
        const { values } = range;

        const rows =
          rangeIndex > 0 ? selectPlayerStats(values) : sortTeams(values);
        return (
          <>
            <Heading as="h1" my="5" w="100%" size="lg" p={2}>
              {rangeIndex > 0 ? "Player Stats" : "Standings"}
            </Heading>
            <Table>
              <thead>
                <tr>
                  {rows[0].map((header, i) => {
                    return (
                      <th key={`${i}-${header}`}>
                        <Heading as="h2" mb="2" size="md" p={2}>
                          {header}
                        </Heading>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => {
                  return (
                    i > 0 && (
                      <tr>
                        {row.map((column, key) => {
                          return (
                            <td key={`${key}-${column}`}>
                              <Heading
                                textAlign={"center"}
                                p={2}
                                as="h3"
                                mb="2"
                                fontSize="md"
                              >
                                {column}
                              </Heading>
                            </td>
                          );
                        })}
                      </tr>
                    )
                  );
                })}
              </tbody>
            </Table>
          </>
        );
      })}
    </>
  ) : (
    <span>No Data</span>
  );
};

export const FrozenPageTemplate = ({ title, description }) => {
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
        <ReactMarkdown
          source={description}
          className=""
          renderers={markdownRenderers}
        />
      </div>
      <Stats />
    </ContentWrapper>
  );
};

FrozenPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const FrozenPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <FrozenPageTemplate
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
    </Layout>
  );
};

FrozenPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FrozenPage;

export const frozenPageQuery = graphql`
  query FrozenPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;

function selectPlayerStats(players) {
  return players.map((value) => [
    value[0],
    value[2],
    value[4],
    value[5],
    value[6],
  ]);
}

function sortTeams(values) {
  const teams = values.slice(1, 5).sort((a, b) => {
    return b[5] === a[5] ? b[8] - a[8] : b[5] - a[5];
  });
  return [values[0], ...teams];
}
