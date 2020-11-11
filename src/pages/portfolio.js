import React from "react"
import Helmet from "react-helmet"
// import { Link, graphql } from "gatsby"
// import { rhythm } from "../utils/typography"
import Layout from "../layouts/index.js"

export default ({ location }) => {
  return (
    <Layout location={location}>
      <Helmet title="portfolio" />
      <h1>Portfolio</h1>
      <p>Portfolio.</p>
    </Layout>
  )
}
