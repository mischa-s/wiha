import React from 'react'
import PropTypes from 'prop-types'
import { PlayPageTemplate } from '../../templates/play-page'

const PlayPagePreview = ({ entry, widgetFor }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (

    <PlayPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      intro={{ blurbs }}
    />
  )
}

PlayPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PlayPagePreview
