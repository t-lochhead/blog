import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import typography from "../utils/typography"
import ReadNext from "../components/ReadNext"
import Layout from "../layouts/index.js"
import profilePic from "../images/headshot.jpeg"

const { rhythm, scale } = typography

class BlogPostRoute extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    let tags
    let tagsSection
    if (this.props.data.markdownRemark.fields.tagSlugs) {
      const tagsArray = this.props.data.markdownRemark.fields.tagSlugs
      tags = tagsArray.map((tag, i) => {
        const divider = i < tagsArray.length - 1 && <span>{" | "}</span>
        return (
          <span key={tag}>
            <Link to={tag}>
              {this.props.data.markdownRemark.frontmatter.tags[i]}
            </Link>
            {divider}
          </span>
        )
      })
      tagsSection = (
        <em
          style={{
            ...scale(-1 / 5),
            display: "block",
            marginBottom: rhythm(1),
          }}
        >
          Tagged with {tags}
        </em>
      )
    }

    return (
      <Layout location={this.props.location}>
        <Helmet
          title={`${post.frontmatter.title}`}
          meta={[{ name: "description", content: post.excerpt }]}
        />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {tagsSection}
        <p
          style={{
            ...scale(-1 / 5),
            display: "block",
            marginBottom: rhythm(1),
          }}
        >
          Posted {post.frontmatter.date}
        </p>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <ReadNext nextPost={post.frontmatter.readNext} />
        <p>
          <img
            src={profilePic}
            alt="Kyle's profile pic"
            style={{
              borderRadius: `100%`,
              float: "left",
              marginRight: rhythm(1 / 4),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
            }}
          />
          <strong>{this.props.data.site.siteMetadata.author}</strong> is a
          seasoned marketer, who loves tech and data. Tavis is the founder of{" "}
          <a
            href="https://recorank.com"
            target="
      _blank"
          >
            RecoRank
          </a>{" "}
          and also consults as a marketer, programmer, and data analyst.
        </p>
        <p>
          Help Tavis get to 10 followers on{" "}
          <a
            href="https://twitter.com/tavislochhead"
            target="
      _blank"
            ref="nofollow"
          >
            Twitter
          </a>
          .
        </p>
      </Layout>
    )
  }
}

export default BlogPostRoute

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        author
        homeCity
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
