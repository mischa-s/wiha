import React from "react";
import PropTypes from "prop-types";
import { BearPageTemplate } from "../../templates/bear-page";

/* Yes this should be in a seperate file so it can be used for all the previews
but there is something that smells like a circular dependency that happens
and I don't feel like digging any deeper right now */

import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";
import theme from "../../theme/theme";

const ThemeWrapper = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      {element}
    </ColorModeProvider>
  </ThemeProvider>
);

const BearPagePreview = ({ entry }) => {
  const heading = entry.getIn(["data", "intro", "heading"]);
  const description = entry.getIn(["data", "intro", "description"]);

  return (
    <ThemeWrapper
      element={
        <BearPageTemplate
          title={entry.getIn(["data", "title"])}
          intro={{ heading, description }}
        />
      }
    />
  );
};

BearPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
};

export default BearPagePreview;