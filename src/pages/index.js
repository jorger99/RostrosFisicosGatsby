import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Header from "../components/header"
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

    <p>These people were found in the CSV file.</p>
    <ul>
      {data.allPeopleCsv.nodes.length > 0 &&
        data.allPeopleCsv.nodes.map(person => (
          <li key={person.FirstName}>
            <Link to={`people/${person.FirstName}-${person.LastName}`}>
              {person.FirstName} {person.LastName}
            </Link>
          </li>
        ))}
    </ul>

  </PageLayout>
)
