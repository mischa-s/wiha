import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import styled from "@emotion/styled";
import { Flex } from "@chakra-ui/core";

const ImageWrapper = styled.img`
  height: 15em;
  width: 15em;
  margin: 1em 0;
`;

const FeatureWrapper = styled.section`
  width: 18em;
  margin: 2em;
`;

const FeatureGrid = ({ gridItems }) => (
  <Flex wrap={"wrap"} justify={"space-between"}>
    {gridItems &&
      gridItems.map(item => (
        <div key={item.text}>
          <FeatureWrapper>
            <ImageWrapper src={item.image} />
            <ReactMarkdown source={item.text} />
          </FeatureWrapper>
        </div>
      ))}
  </Flex>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
