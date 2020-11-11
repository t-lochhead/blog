import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import typography from "../utils/typography"
const rhythm = typography.rhythm
const scale = typography.scale

const NoStyleLink = props => (
  <div
    css={{
      display: "flex",
      margin: `0 ${rhythm(1 / 4)}`,
      fontSize: "1rem",
      "@media (min-width: 600px)": {
        fontSize: scale(2 / 5).fontSize,
      },
    }}
  >
    <Link css={{ color: `inherit`, textDecoration: `none` }} {...props} />
  </div>
)

class Wrapper extends React.Component {
  render() {
    return (
      <div
        css={{
          minHeight: `100vh`,
          borderTop: `${rhythm(3 / 4)} solid #51b3bf`,
          "@media (min-width: 420px)": {
            border: `${rhythm(3 / 4)} solid #51b3bf`,
          },
        }}
      >
        <div
          css={{
            // minHeight: rhythm(1),
            // height: "60px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            css={{
              float: `left`,
              color: "#51b3bf",
              marginTop: rhythm(3 / 4),
              marginLeft: rhythm(2 / 4),
              lineHeight: scale(2 / 5).lineHeight,
            }}
          >
            <NoStyleLink to="/">tavis</NoStyleLink>
          </div>
          <div
            css={{
              float: `right`,
              color: "#51b3bf",
              marginTop: rhythm(3 / 4),
              marginRight: rhythm(2 / 4),
              lineHeight: scale(2 / 5).lineHeight,
              flexWrap: "wrap",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              css={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <NoStyleLink to="/portfolio/">portfolio</NoStyleLink>
              <NoStyleLink to="/blog/">blog</NoStyleLink>
            </div>
            <div
              css={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <NoStyleLink to="/about/">about</NoStyleLink>
              <NoStyleLink to="/contact/">contact</NoStyleLink>
            </div>
          </div>
        </div>
        <div
          css={{
            padding: `${rhythm(2)} ${rhythm(3 / 4)}`,
            "@media (min-width: 420px)": {
              padding: `${rhythm(3)} ${rhythm(3 / 4)}`,
            },
            maxWidth: rhythm(22),
            margin: `0 auto`,
          }}
        >
          <Helmet defaultTitle="tavis" titleTemplate="tavis | %s" />
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Wrapper
