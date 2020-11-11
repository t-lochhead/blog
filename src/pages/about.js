import React from "react"
import Helmet from "react-helmet"
// import { Link, graphql } from "gatsby"
// import { rhythm } from "../utils/typography"
import Layout from "../layouts/index.js"

export default ({ location }) => {
  return (
    <Layout location={location}>
      <Helmet title="about" />
      <h1>Greetings</h1>
      <p>My name is Tavis.</p>
      <p>
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
      <p>Feel free to hit me up at tavislochhead [at] gmail [dot] com.</p>
    </Layout>
  )
}
