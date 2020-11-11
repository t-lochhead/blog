import React from "react"
import Helmet from "react-helmet"
// import { Link, graphql } from "gatsby"
// import { rhythm } from "../utils/typography"
import Layout from "../layouts/index.js"

export default ({ location }) => {
  return (
    <Layout location={location}>
      <Helmet title="contact" />
      <h1>Reach out</h1>
      <p>I would love to hear from you.</p>
      <p>Hit me up at tavislochhead [at] gmail [dot] com.</p>
      <p>
        Or follow me on{" "}
        <a
          href="https://twitter.com/tavislochhead"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        .
      </p>
      <p>Do both if you really want my attention. 👀</p>
    </Layout>
  )
}
