import React from "react";
import PropTypes from "prop-types";
import { PlayPageTemplate } from "../../templates/play-page";

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

const PlayPagePreview = ({ entry }) => {
  const entryBlurbs = entry.getIn(["data", "intro", "blurbs"]);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  return (
    <ThemeWrapper
      element={
        <PlayPageTemplate
          title={entry.getIn(["data", "title"])}
          intro={{ blurbs }}
        />
      }
    />
  );
};

PlayPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default PlayPagePreview;
