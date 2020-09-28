import { StaticQuery, graphql } from "gatsby"
import React from "react"
import PageLayout from "../components/pagelayout"
import SEO from "../components/seo"

export default () => (

  <StaticQuery
    query={graphql`
      query AllPeople {
        allPeopleCsv {
          nodes {
            ...PeopleCsvFragment
          }
        }
      }
    `}
    render={data => <IndexPage data={data} />}
  />
)

const IndexPage = ({ data }) => (

  <PageLayout>

    <h1>Hello Everyone!</h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />

    <SEO title="Home" />

  </PageLayout>
)
