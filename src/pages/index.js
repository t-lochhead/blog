import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import { scale, rhythm } from "../utils/typography"
import homeGif from "../images/homegif2.gif"

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
        background: `#51b3bf`,
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
              style={{
                fontWeight: 200,
                color: "#f994ff",
                textShadow: "2px 2px #ffab94, 4px 4px #ffff94",
              }}
            >
              Marketing
            </span>
            <br />
            <span
              style={{
                fontWeight: 500,
                color: "#ffab94",
                textShadow: "2px 2px #ffff94, 4px 4px #f994ff",
              }}
            >
              Technology
            </span>
            <br />
            <span
              style={{
                fontWeight: 800,
                color: "#ffff94",
                textShadow: "2px 2px #f994ff, 4px 4px #ffab94",
              }}
            >
              Data
            </span>
          </h1>
        </div>
        <div
          css={{
            display: `flex`,
            flex: 1,
            alignItems: `center`,
            justifyContent: "center",
          }}
        >
          <img
            alt="homegif"
            src={homeGif}
            style={{
              objectFit: "contain",
              width: "80%",
              height: "100%",
              maxHeight: "500px",
              margin: "0",
            }}
          />
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
