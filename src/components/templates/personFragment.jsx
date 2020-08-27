import { graphql } from "gatsby"
export const PeopleCsvFragment = graphql`
  fragment PeopleCsvFragment on PeopleCsv {
    ID
    FirstName
    LastName
    DateOfBirth
    Tags
    Biography
    Biography__2
  }
`
