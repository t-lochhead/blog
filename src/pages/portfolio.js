import React from "react"
import Helmet from "react-helmet"
// import { Link, graphql } from "gatsby"
// import { rhythm } from "../utils/typography"
import Layout from "../layouts/portfolio.js"
import Consulting from "../images/consulting.jpg"
import Bell from "../images/bell.jpg"
import Rogers from "../images/rogers.jpg"
import Kijiji from "../images/kijiji.jpg"
import AlterSpark from "../images/alterspark.jpg"
import WeeverApps from "../images/weeverapps.jpg"
import typography from "../utils/typography"
const rhythm = typography.rhythm

export default ({ location }) => {
  return (
    <Layout location={location}>
      <Helmet title="portfolio" />
      <h1>Portfolio</h1>
      {/* <p>Highlights from my 10+ years in marketing.</p> */}
      <h2 css={{ marginBottom: rhythm(1 / 5) }}>
        Independent Startup Strategy Consultant
      </h2>
      <p css={{ fontStyle: "italic" }}>Oct 2020 – Present</p>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          marginTop: rhythm(1),
          "@media (min-width: 600px)": {
            flexDirection: "row",
          },
        }}
      >
        <div css={{ display: "flex", flex: "1" }}>
          <img
            css={{
              width: "100%",
              boxShadow: "2px 2px 10px grey",
              objectFit: "contain",
              height: "100%",
              margin: "0",
            }}
            src={Consulting}
            alt="consulting"
          />
        </div>
        <div
          css={{
            display: "flex",
            flex: "1",
            paddingTop: rhythm(1),
            flexDirection: "column",
            justifyContent: "center",
            "@media (min-width: 600px)": {
              padding: rhythm(1),
            },
          }}
        >
          <p>
            <b>Business Strategy & Execution</b>
          </p>
          <p>
            Advises and supports startups with business strategy and execution,
            particularly regarding product, marketing, and hiring
          </p>
          {/* <p>
            <b>Growth Execution</b>
          </p>
          <p>
            Delivers all levels of marketing execution, including community
            engagement, SEO, PR, paid advertising, and more
          </p> */}
          <p>
            <b>Client List</b>
          </p>
          <p
            css={{
              "@media (min-width: 600px)": {
                marginBottom: "0",
              },
            }}
          >
            <a href="https://freedom.gg" target="_blank" rel="noreferrer">
              Freedom! Games
            </a>
            ,{" "}
            <a
              href="https://polymersearch.com"
              target="_blank"
              rel="noreferrer"
            >
              Polymer Search
            </a>
            ,{" "}
            <a href="https://acmehatco.com" target="_blank" rel="noreferrer">
              Acme Hat Co
            </a>
          </p>
        </div>
      </div>
      <h2 css={{ marginTop: rhythm(2), marginBottom: rhythm(1 / 5) }}>
        Telco Marketing Lead @ Cisco
      </h2>
      <p css={{ fontStyle: "italic" }}>Jul 2019 – Sep 2020 (1 year 4 months)</p>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          marginTop: rhythm(1),
          "@media (min-width: 600px)": {
            flexDirection: "row",
          },
        }}
      >
        <div css={{ display: "flex", flex: "1" }}>
          <img
            css={{
              width: "100%",
              boxShadow: "2px 2px 10px grey",
              objectFit: "contain",
              height: "100%",
              margin: "0",
            }}
            src={Bell}
            alt="bell"
          />
        </div>
        <div
          css={{
            display: "flex",
            flex: "1",
            paddingTop: rhythm(1),
            flexDirection: "column",
            justifyContent: "center",
            "@media (min-width: 600px)": {
              padding: rhythm(1),
            },
          }}
        >
          <p>
            <b>Marketing Strategy</b>
          </p>
          <p>
            Led marketing strategy and execution for Service Provider for the
            Canada segment (Bell, Telus, Rogers, Shaw)
          </p>
          <p>
            <b>Bell-Cisco Co-branded Webex Campaign</b>
          </p>
          <p
            css={{
              "@media (min-width: 600px)": {
                marginBottom: "0",
              },
            }}
          >
            Partnered with Bell Canada to launch a nation-wide campaign
            promoting Cisco Webex on Bell’s network, resulting in $10M+ in
            revenue
          </p>
        </div>
      </div>
      <h2 css={{ marginTop: rhythm(2), marginBottom: rhythm(1 / 5) }}>
        B2B Marketing Lead @ Rogers
      </h2>
      <p css={{ fontStyle: "italic" }}>Jul 2016 – Jun 2019 (3 years)</p>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          marginTop: rhythm(1),
          "@media (min-width: 600px)": {
            flexDirection: "row",
          },
        }}
      >
        <div css={{ display: "flex", flex: "1" }}>
          <img
            css={{
              width: "100%",
              boxShadow: "2px 2px 10px grey",
              objectFit: "contain",
              height: "100%",
              margin: "0",
            }}
            src={Rogers}
            alt="rogers"
          />
        </div>
        <div
          css={{
            display: "flex",
            flex: "1",
            paddingTop: rhythm(1),
            flexDirection: "column",
            justifyContent: "center",
            "@media (min-width: 600px)": {
              padding: rhythm(1),
            },
          }}
        >
          <p>
            <b>Marketing Strategy</b>
          </p>
          <p>
            Led marketing strategy and execution for Rogers B2B segments;
            promoting 5G, wireless, wireline, data centre, cloud, IoT, and
            security
          </p>
          <p>
            <b>Rogers 5G Launch @ Collision</b>
          </p>
          <p
            css={{
              "@media (min-width: 600px)": {
                marginBottom: "0",
              },
            }}
          >
            Took the B2B marketing lead for Rogers' 5G launch at Collision -
            North America's largest tech conference; resulting in significant
            brand awareness and 500+ MQLs
          </p>
        </div>
      </div>
      <h2 css={{ marginTop: rhythm(2), marginBottom: rhythm(1 / 5) }}>
        B2B Marketing Manager @ eBay/Kijiji
      </h2>
      <p css={{ fontStyle: "italic" }}>Feb 2015 – Jul 2016 (1 year 6 months)</p>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          marginTop: rhythm(1),
          "@media (min-width: 600px)": {
            flexDirection: "row",
          },
        }}
      >
        <div css={{ display: "flex", flex: "1" }}>
          <img
            css={{
              width: "100%",
              boxShadow: "2px 2px 10px grey",
              objectFit: "contain",
              height: "100%",
              margin: "0",
            }}
            src={Kijiji}
            alt="kijiji"
          />
        </div>
        <div
          css={{
            display: "flex",
            flex: "1",
            paddingTop: rhythm(1),
            flexDirection: "column",
            justifyContent: "center",
            "@media (min-width: 600px)": {
              padding: rhythm(1),
            },
          }}
        >
          <p>
            <b>Marketing Strategy</b>
          </p>
          <p>
            Managed marketing strategy for the Kijiji For Business portfolio,
            supporting verticals in display advertising, automotive, real
            estate, and jobs
          </p>
          <p>
            <b>K4B Re-Brand</b>
          </p>
          <p
            css={{
              "@media (min-width: 600px)": {
                marginBottom: "0",
              },
            }}
          >
            Launched Kijiji For Business re-brand, resulting in 20% increase of
            new advertiser acquisition over 1 year
          </p>
        </div>
      </div>
      <h2 css={{ marginTop: rhythm(2), marginBottom: rhythm(1 / 5) }}>
        Research & Marketing Manager @ AlterSpark
      </h2>
      <p css={{ fontStyle: "italic" }}>
        Sep 2012 – Feb 2015 (2 years 6 months)
      </p>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          marginTop: rhythm(1),
          "@media (min-width: 600px)": {
            flexDirection: "row",
          },
        }}
      >
        <div css={{ display: "flex", flex: "1" }}>
          <img
            css={{
              width: "100%",
              boxShadow: "2px 2px 10px grey",
              objectFit: "contain",
              height: "100%",
              margin: "0",
            }}
            src={AlterSpark}
            alt="alterspark"
          />
        </div>
        <div
          css={{
            display: "flex",
            flex: "1",
            paddingTop: rhythm(1),
            flexDirection: "column",
            justifyContent: "center",
            "@media (min-width: 600px)": {
              padding: rhythm(1),
            },
          }}
        >
          <p>
            <b>Digital Marketing</b>
          </p>
          <p>
            Planned, executed, and measured online marketing campaigns across
            Canada and the United States
          </p>
          <p
            css={{
              "@media (min-width: 600px)": {
                marginBottom: "0",
              },
            }}
          >
            Acquired large accounts like Salesforce and Accenture through
            targeted LinkedIn and Twitter campaigns
          </p>
        </div>
      </div>
      <h2 css={{ marginTop: rhythm(2), marginBottom: rhythm(1 / 5) }}>
        Marketing Specialist @ Weever Apps
      </h2>
      <p css={{ fontStyle: "italic" }}>Sep 2011 – Aug 2012 (1 year)</p>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          marginTop: rhythm(1),
          "@media (min-width: 600px)": {
            flexDirection: "row",
          },
        }}
      >
        <div css={{ display: "flex", flex: "1" }}>
          <img
            css={{
              width: "100%",
              boxShadow: "2px 2px 10px grey",
              objectFit: "contain",
              height: "100%",
              margin: "0",
            }}
            src={WeeverApps}
            alt="weeverapps"
          />
        </div>
        <div
          css={{
            display: "flex",
            flex: "1",
            paddingTop: rhythm(1),
            flexDirection: "column",
            justifyContent: "center",
            "@media (min-width: 600px)": {
              padding: rhythm(1),
            },
          }}
        >
          <p>
            <b>Digital Marketing</b>
          </p>
          <p>
            Managed omni-channel marketing execution, including social media,
            email, digital advertising, and landing page design
          </p>
          <p>
            <b>Account Management</b>
          </p>
          <p
            css={{
              "@media (min-width: 600px)": {
                marginBottom: "0",
              },
            }}
          >
            Worked closely with clients to understand their needs and ensure
            success on the platform
          </p>
        </div>
      </div>
    </Layout>
  )
}
