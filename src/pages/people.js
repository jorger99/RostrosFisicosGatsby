import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import PageLayout from "../components/pagelayout.js"


export default () => (

  <StaticQuery
    query={graphql`
      query AllPeopleAndAllPeople {
        allPeopleCsv {
          nodes {
            ...PeopleCsvFragment
          }
        }
      }
    `}
    render={data => <PeoplePage data={data} />}
  />
)
const PeoplePage = ({ data }) => (
  <PageLayout>
    <h1> People </h1>
    <p>Here is a list of our members</p>
    <p>These people were found in the CSV file.</p>
    <ul>
      {data.allPeopleCsv.nodes.length > 0 &&
        data.allPeopleCsv.nodes.map(person => (
          <li key={person.FirstName}>
            <Link to={`${person.FirstName}-${person.LastName}`}>
              {person.FirstName} {person.LastName}
            </Link>
          </li>
        ))}
    </ul>

    <div class="w-layout-grid grid">

      <img class="image" src="src/images/blank-person.png" width="250" height="250" alt="" sizes="(max-width: 479px) 16vw, (max-width: 767px) 17vw, 18vw" id="w-node-6b31be2bdd0f-0f8fd6e2" loading="lazy"></img>

    </div>

  </PageLayout>
)
