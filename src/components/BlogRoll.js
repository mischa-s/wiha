import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import { Button } from "@chakra-ui/core";
import { Heading } from "@chakra-ui/core";

import PreviewCompatibleImage from "./PreviewCompatibleImage";

function BlogRoll(props) {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      {posts &&
        posts.map(({ node: post }) => (
          <div key={post.id}>
            <article
              className={` ${
                post.frontmatter.featuredpost ? "is-featured" : ""
              }`}
            >
              <header>
                {post.frontmatter.featuredimage ? (
                  <div>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`
                      }}
                    />
                  </div>
                ) : null}
                <Heading as="h3" mb="5" size="md">
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  <span> &bull; </span>
                  <span>{post.frontmatter.date}</span>
                </Heading>
              </header>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Button mb={10} variant="link">
                  <Link to={post.fields.slug}>Keep Reading →</Link>
                </Button>
              </p>
            </article>
          </div>
        ))}
    </div>
  );
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
