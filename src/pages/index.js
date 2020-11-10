import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import { scale, rhythm } from "../utils/typography"
import homeGif from "../images/homegif2.gif"

const NoStyleLink = props => (
  <Link css={{ color: `inherit`, textDecoration: `none` }} {...props} />
)

const whitish = `#deeaf3`

export default () => {
  return (
    <>
      <Helmet title="tavis" />
      <div
        css={{
          display: `flex`,
          height: `100vh`,
          background: whitish,
        }}
      >
        {/* <div
        css={{
          position: `absolute`,
          left: `33.333%`,
          width: rhythm(1),
          height: `22vh`,
          zIndex: 10,
          background: whitish,
          borderBottomRightRadius: `34px 41%`,
        }}
      />
      <div
        css={{
          position: `absolute`,
          left: `33.33%`,
          bottom: 0,
          width: rhythm(1),
          height: `24vh`,
          zIndex: 10,
          background: whitish,
          borderTopLeftRadius: `34px 41%`,
        }}
      /> */}
        <div
          css={{
            display: `flex`,
            position: `absolute`,
            margin: rhythm(3 / 4),
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: `center`,
            alignItems: `center`,
            background: `#51b3bf`,
            flexWrap: "wrap",
          }}
        >
          <div
            css={{
              display: `flex`,
              flex: 1,
              "@media (max-width: 420px)": {
                flex: "unset",
                alignSelf: "flex-end",
              },
              justifyContent: "center",
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
              "@media (max-width: 420px)": {
                flex: "unset",
              },
              justifyContent: "center",
            }}
          >
            <img
              alt="homegif"
              src={homeGif}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "50%",
                maxHeight: "500px",
                margin: "0",
              }}
            />
          </div>
        </div>
        <div
          css={{
            color: whitish,
            position: `absolute`,
            top: rhythm(1.5),
            zIndex: 10,
            transform: `rotate(90deg)`,
            transformOrigin: `left top 0`,
            left: rhythm(2.5),
            fontSize: scale(2 / 5).fontSize,
            lineHeight: scale(2 / 5).lineHeight,
            "@media (min-width: 420px)": {
              left: rhythm(1.5),
              transform: `none`,
            },
          }}
        >
          <NoStyleLink to="/">tavis</NoStyleLink>
        </div>
        <div
          css={{
            color: whitish,
            position: `absolute`,
            right: rhythm(1.5),
            top: rhythm(1.5),
            zIndex: 10,
            fontSize: scale(2 / 5).fontSize,
            lineHeight: scale(2 / 5).lineHeight,
          }}
        >
          {/* <NoStyleLink to="/blog/">portfolio</NoStyleLink>{" "} */}
          <NoStyleLink to="/blog/">blog</NoStyleLink>&nbsp;&nbsp;
          <NoStyleLink to="/about/">about</NoStyleLink>
          {/* <NoStyleLink to="/about/">contact</NoStyleLink> */}
        </div>
      </div>
    </>
  )
}
