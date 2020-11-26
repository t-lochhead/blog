import React from "react"
import Helmet from "react-helmet"
// import { Link, graphql } from "gatsby"
// import { rhythm } from "../utils/typography"
import Layout from "../layouts/index.js"
import Headshot from "../images/headshot.jpeg"
import typography from "../utils/typography"
const rhythm = typography.rhythm

export default ({ location }) => {
  return (
    <Layout location={location}>
      <Helmet title="about" />
      <h1>Greetings</h1>
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          marginBottom: rhythm(1),
          "@media (min-width: 600px)": {},
        }}
      >
        <div css={{ display: "flex", flex: "1" }}>
          <img
            css={{
              width: "100%",
              // boxShadow: "2px 2px 10px grey",
              objectFit: "cover",
              height: "100%",
              margin: "0",
              borderRadius: "100%",
            }}
            src={Headshot}
            alt="headshot"
          />
        </div>
        <div
          css={{
            display: "flex",
            flex: "2",
            // paddingTop: rhythm(1),
            flexDirection: "column",
            justifyContent: "center",
            // "@media (min-width: 600px)": {
            paddingLeft: rhythm(1),
            // },
          }}
        >
          <p>My name is Tavis.</p>
          <p
            css={{
              "@media (max-width: 600px)": {
                marginBottom: "0",
              },
            }}
          >
            Tavis Ivan Lochhead, if you want to be formal about it.
          </p>
          <p
            css={{
              display: "none",
              "@media (min-width: 600px)": {
                display: "inherit",
                marginBottom: "0",
              },
            }}
          >
            I love to create, learn how things work, and help people solve
            problems.
          </p>
        </div>
      </div>
      <p
        css={{
          "@media (min-width: 600px)": {
            display: "none",
          },
        }}
      >
        I love to create, learn how things work, and help people solve problems.
      </p>
      {/* <p>
        I come from a family of artists, including my late grandfather,{" "}
        <a
          href="https://en.wikipedia.org/wiki/Kenneth_Lochhead"
          target="
      _blank"
        >
          Kenneth Lochhead
        </a>
        .
      </p> */}
      <p>
        Over the past 10+ years, I've helped many incredible companies (both
        large and small) grow their businesses with data-driven marketing
        leadership and campaign execution.
      </p>
      <p>
        My primary skills include marketing strategy, market research, and
        marketing execution (web development, SEO, PPC, content, PR, events, and
        more).
      </p>
      <p>
        More recently, I've been developing my skillset as a programmer. This
        year, I built{" "}
        <a
          href="https://recorank.com"
          target="
      _blank"
        >
          RecoRank
        </a>{" "}
        using Node.js, React, Next.js, Algolia, and MongoDB. I've also been
        helping entrepreneurs build their own applications, which has given me
        the opportunity to get hands on experience with Python, Django, SQL, and
        virtual private servers.
      </p>
      <p>
        If you have needs regarding marketing, technology, and/or data, please
        email me at tavislochhead [at] gmail [dot] com.
      </p>
    </Layout>
  )
}
