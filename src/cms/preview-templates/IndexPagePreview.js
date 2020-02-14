import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";
import theme from "../../theme/theme";

const WrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      {element}
    </ColorModeProvider>
  </ThemeProvider>
);


const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <WrapRootElement
        element={
          <IndexPageTemplate
            image={data.image}
            title={data.title}
            heading={data.heading}
            subheading={data.subheading}
            description={data.description}
            mainpitch={data.mainpitch || {}}
          />
        }
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;
