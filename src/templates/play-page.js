import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Content, { HTMLContent } from '../components/Content'

export const PlayPageTemplate = ({ title, content, contentComponent, intro }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              {intro && <Features gridItems={intro.blurbs} /> }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PlayPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const PlayPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PlayPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        intro={post.frontmatter.intro}
      />
    </Layout>
  )
}

PlayPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PlayPage

export const PlayPageQuery = graphql`
  query PlayPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
