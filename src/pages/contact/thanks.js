import React from "react";
import { Link } from "gatsby";
import { Button, Flex, Heading } from "@chakra-ui/core";

import Layout from "../../components/Layout";
import ContentWrapper from "../../styles/content-wrapper";

export default () => (
  <Layout>
    <ContentWrapper>
      <Heading
        as="h1"
        mb="5"
        size="xl"
        bg="blackAlpha.800"
        color="brightYellow"
        p={2}
      >
        <h1>Message sent</h1>
      </Heading>
      <div>
        <p>Thanks for getting in touch! We love helping people with questions about hockey and will try get to back to you within the next few days</p>

        <Flex mt='4' justify={"center"}>
            <Link to="/">
              <Button size="lg" variant="outline">
                Return to home page
              </Button>
            </Link>
            </Flex>
      </div>
    </ContentWrapper>
  </Layout>
);

// import React from "react";
// import PropTypes from "prop-types";
// import { graphql } from "gatsby";
// import { Heading } from "@chakra-ui/core";

// import ReactMarkdown from "react-markdown";

// import Layout from "../components/Layout";

// import ContentWrapper from "../styles/content-wrapper";

// export function BearPageTemplate({ title, description }) {
//   return (
//     <ContentWrapper>
//       <Heading
//         as="h1"
//         mb="5"
//         size="xl"
//         bg="blackAlpha.800"
//         color="brightYellow"
//         p={2}
//       >
//         {title}
//       </Heading>
//       <div>
//         <ReactMarkdown source={description} className="" />
//       </div>
//     </ContentWrapper>
//   );
// }

// BearPageTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
// };

// const BearPage = ({ data }) => {
//   const { markdownRemark: post } = data;

//   return (
//     <Layout>
//       <BearPageTemplate
//         title={post.frontmatter.title}
//         description={post.frontmatter.description}
//       />
//     </Layout>
//   );
// };

// BearPage.propTypes = {
//   data: PropTypes.object.isRequired,
// };

// export default BearPage;

// export const bearPageQuery = graphql`
//   query BearPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         title
//         description
//       }
//     }
//   }
// `;
