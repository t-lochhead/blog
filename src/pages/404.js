import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import { scale, rhythm } from "../utils/typography"

const NoStyleLink = props => (
  <div
    css={{
      display: "flex",
      margin: `0 ${rhythm(1 / 4)}`,
      fontSize: scale(1 / 10).fontSize,
      "@media (min-width: 600px)": {
        fontSize: scale(1.5 / 5).fontSize,
      },
    }}
  >
    <Link css={{ color: `inherit`, textDecoration: `none` }} {...props} />
  </div>
)

const whitish = `#deeaf3`

export default () => {
  return (
    <div
      css={{
        minHeight: `100vh`,
        borderTop: `${rhythm(3 / 4)} solid ${whitish}`,
        "@media (min-width: 420px)": {
          border: `${rhythm(3 / 4)} solid ${whitish}`,
        },
        background: `#333333`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet defaultTitle="tavis" titleTemplate="tavis" />
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
            color: whitish,
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
            color: whitish,
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
          margin: `0 auto`,
          display: `flex`,
          flexDirection: "row",
          alignItems: `center`,
          flex: "1",
          "@media (max-width: 420px)": {
            flexDirection: "column",
          },
        }}
      >
        <div
          css={{
            display: `flex`,
            flex: 1,
            justifyContent: "center",
            alignItems: `center`,
          }}
        >
          <h1
            css={{
              // width: `80%`,
              fontSize: scale(6 / 5).fontSize,
              lineHeight: 1.1,
              margin: "0",
              "@media (min-width: 800px)": {
                fontSize: scale(8 / 5).fontSize,
              },
              "@media (min-width: 1050px)": {
                fontSize: scale(12 / 5).fontSize,
              },
            }}
          >
            <span
              css={{
                fontWeight: 200,
                color: whitish,
                // color: "#f994ff",
                // textShadow: "2px 2px #ffab94, 4px 4px #ffff94",
              }}
            >
              Page
            </span>
            <br />
            <span
              css={{
                fontWeight: 500,
                color: whitish,
                // color: "#ffab94",
                // textShadow: "2px 2px #ffff94, 4px 4px #f994ff",
              }}
            >
              Not
            </span>
            <br />
            <span
              css={{
                fontWeight: 800,
                color: whitish,
                // color: "#ffff94",
                // textShadow: "2px 2px #f994ff, 4px 4px #ffab94",
              }}
            >
              Found
            </span>
          </h1>
        </div>
      </div>
      <div
        css={{
          // minHeight: rhythm(1),
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          css={{
            justifyContent: "center",
            color: whitish,
            marginBottom: rhythm(3 / 4),
            fontSize: scale(2 / 5).fontSize,
            lineHeight: scale(2 / 5).lineHeight,
            display: "flex",
            flex: "1",
          }}
        >
          {/* portfolio -> */}
        </div>
      </div>
    </div>
  )
}
